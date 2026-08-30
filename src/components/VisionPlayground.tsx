import React, { useState, useMemo } from 'react';
import { 
  Scan, 
  Activity, 
  Cpu, 
  Layers, 
  Play, 
  Pause, 
  AlertTriangle, 
  Sparkles,
  Terminal
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface VisionPlaygroundProps {
  theme?: 'dark' | 'light';
}

type ModelMode = 'pipeguard' | 'satellite' | 'smartcity';

export const VisionPlayground: React.FC<VisionPlaygroundProps> = ({ theme = 'dark' }) => {
  const { t, language } = useLanguage();
  const [activeModel, setActiveModel] = useState<ModelMode>('pipeguard');
  const [confidenceThreshold, setConfidenceThreshold] = useState<number>(85);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [showHeatmap, setShowHeatmap] = useState<boolean>(true);
  const [activeSpectralBand, setActiveSpectralBand] = useState<'rgb' | 'ndvi' | 'thermal'>('rgb');
  const [selectedDefect, setSelectedDefect] = useState<string | null>(null);

  const isLight = theme === 'light';

  // Model Specs & Scenario Data localized
  const getLocalizedScenarios = () => {
    if (language === 'ar') {
      return {
        pipeguard: {
          name: 'PipeGuard AI (رؤية أنابيب NDT)',
          subtitle: 'أطروحة ماجستير • تحديد مواقع التشققات والتآكل السطحي الذاتي',
          architecture: 'YOLOv8-Custom + Multi-Scale Feature Pyramid Network (FPN)',
          dataset: '12,500 إطار فحص صناعي عالي الدقة NDT',
          edgeRuntime: 'تسريع ONNX TensorRT GPU',
          metrics: {
            latency: '14.2 ms / frame',
            fps: '70 FPS (RTX 4090)',
            map50: '96.4%',
            mAP50_95: '88.1%'
          },
          detections: [
            {
              id: 'def-1',
              type: 'تشقق سطحي عرضي',
              confidence: 94.8,
              bbox: { x: 38, y: 32, w: 24, h: 36 },
              severity: 'حرج (فئة 3)',
              depthEstimate: '2.4 ملم',
              action: 'يلزم تعزيز هيكلي فوري'
            },
            {
              id: 'def-2',
              type: 'بقعة تآكل نخرية',
              confidence: 89.2,
              bbox: { x: 68, y: 55, w: 20, h: 22 },
              severity: 'متوسط (فئة 2)',
              depthEstimate: '0.8 ملم',
              action: 'جدولة فحص السمك بالموجات فوق الصوتية'
            }
          ]
        },
        satellite: {
          name: 'محرك شذوذ الأقمار الصناعية ASAL',
          subtitle: 'الوكالة الفضائية الجزائرية (ASAL) • مراقبة الأرض والتحليل الطيفي',
          architecture: 'Deep Convolutional Autoencoder + Spectral Residuals',
          dataset: 'بيانات AlSat الطيفية المتعددة GeoTIFF (حوض غليزان / الصحراء)',
          edgeRuntime: 'استدلال CUDA PyTorch الدفعي',
          metrics: {
            latency: '32.6 ms / tile',
            fps: '30 Tiles/sec',
            map50: '94.8%',
            mAP50_95: '85.6%'
          },
          detections: [
            {
              id: 'sat-1',
              type: 'اضطراب أرضي غير مسجل',
              confidence: 96.1,
              bbox: { x: 45, y: 28, w: 28, h: 30 },
              severity: 'شذوذ مرتفع',
              depthEstimate: 'انخفاض NDVI: -0.42',
              action: 'تم تعليمه لمراجعة الامتثال البيئي'
            },
            {
              id: 'sat-2',
              type: 'شذوذ تسرب رطوبة',
              confidence: 87.4,
              bbox: { x: 18, y: 62, w: 22, h: 20 },
              severity: 'شذوذ متوسط',
              depthEstimate: 'مؤشر NDWI: +0.38',
              action: 'مقارنة مع قياسات الري البلدية'
            }
          ]
        },
        smartcity: {
          name: 'رؤية مخاطر الطرق SHESEM',
          subtitle: 'هاكاثون المدينة الذكية • إدراك الحفر وعيوب الطرق في الوقت الفعلي',
          architecture: 'Lightweight Quantized YOLOv8 Nano + GPS Spatial Clustering',
          dataset: '8,200 صورة طرق حضرية وسريعة في الجزائر',
          edgeRuntime: 'محسن لـ Edge TPU / Mobile NPU',
          metrics: {
            latency: '22.1 ms (Edge NPU)',
            fps: '45 FPS',
            map50: '92.5%',
            mAP50_95: '83.2%'
          },
          detections: [
            {
              id: 'city-1',
              type: 'حفرة عالية الخطورة',
              confidence: 93.6,
              bbox: { x: 30, y: 58, w: 26, h: 25 },
              severity: 'مستوى الخطر A',
              depthEstimate: 'عمق تقديري 6.5 سم',
              action: 'تم إرسال بلاغ إصلاح بلدي آلي مع إحداثيات GPS: 35.742°N, 0.556°E'
            },
            {
              id: 'city-2',
              type: 'شق أسفلتي طولي',
              confidence: 88.0,
              bbox: { x: 62, y: 35, w: 18, h: 42 },
              severity: 'مستوى الخطر B',
              depthEstimate: 'طول تقديري 1.8 م',
              action: 'مسجل في دورة تدهور الأسفلت التنبؤية'
            }
          ]
        }
      };
    }

    if (language === 'fr') {
      return {
        pipeguard: {
          name: 'PipeGuard AI (Vision CND Pipelines)',
          subtitle: 'Thèse de Master • Localisation autonome des fissures de surface et corrosion',
          architecture: 'YOLOv8-Custom + Multi-Scale Feature Pyramid Network (FPN)',
          dataset: '12 500 images d\'inspection industrielle haute résolution CND',
          edgeRuntime: 'Accélération GPU ONNX TensorRT',
          metrics: {
            latency: '14.2 ms / image',
            fps: '70 FPS (RTX 4090)',
            map50: '96.4%',
            mAP50_95: '88.1%'
          },
          detections: [
            {
              id: 'def-1',
              type: 'Fissure transversale de surface',
              confidence: 94.8,
              bbox: { x: 38, y: 32, w: 24, h: 36 },
              severity: 'Critique (Classe 3)',
              depthEstimate: '2.4 mm',
              action: 'Renforcement structurel immédiat requis'
            },
            {
              id: 'def-2',
              type: 'Zone de piqûres de corrosion',
              confidence: 89.2,
              bbox: { x: 68, y: 55, w: 20, h: 22 },
              severity: 'Modéré (Classe 2)',
              depthEstimate: '0.8 mm',
              action: 'Planifier vérification d\'épaisseur par ultrasons'
            }
          ]
        },
        satellite: {
          name: 'Moteur d\'Anomalies Satellitaires ASAL',
          subtitle: 'Agence Spatiale Algérienne (ASAL) • Observation de la Terre et analyse spectrale',
          architecture: 'Deep Convolutional Autoencoder + Résidus spectraux',
          dataset: 'Tuiles GeoTIFF multispectrales AlSat (Bassin de Relizane / Sahara)',
          edgeRuntime: 'Inférence par lot PyTorch CUDA',
          metrics: {
            latency: '32.6 ms / tuile (512x512)',
            fps: '30 Tuiles/sec',
            map50: '94.8%',
            mAP50_95: '85.6%'
          },
          detections: [
            {
              id: 'sat-1',
              type: 'Perturbation de sol non enregistrée',
              confidence: 96.1,
              bbox: { x: 45, y: 28, w: 28, h: 30 },
              severity: 'Anomalie élevée',
              depthEstimate: 'Baisse NDVI: -0.42',
              action: 'Signalé pour conformité environnementale'
            },
            {
              id: 'sat-2',
              type: 'Anomalie d\'infiltration d\'humidité',
              confidence: 87.4,
              bbox: { x: 18, y: 62, w: 22, h: 20 },
              severity: 'Anomalie moyenne',
              depthEstimate: 'Indice NDWI: +0.38',
              action: 'Recoupement avec télémétrie municipale d\'irrigation'
            }
          ]
        },
        smartcity: {
          name: 'Vision des Dangers Routiers SHESEM',
          subtitle: 'Hackathon Smart City • Détection en temps réel des nids-de-poule et dégradations',
          architecture: 'YOLOv8 Nano allégé et quantifié + Clustering spatial GPS',
          dataset: '8 200 images de routes urbaines et autoroutes algériennes',
          edgeRuntime: 'Optimisé pour Edge TPU / NPU mobile',
          metrics: {
            latency: '22.1 ms (NPU Edge)',
            fps: '45 FPS en direct',
            map50: '92.5%',
            mAP50_95: '83.2%'
          },
          detections: [
            {
              id: 'city-1',
              type: 'Nid-de-poule à fort impact',
              confidence: 93.6,
              bbox: { x: 30, y: 58, w: 26, h: 25 },
              severity: 'Niveau de danger A',
              depthEstimate: 'Prof. estimée: 6.5 cm',
              action: 'Ticket de réparation municipal automatique émis avec GPS: 35.742°N, 0.556°E'
            },
            {
              id: 'city-2',
              type: 'Fissure asphaltique longitudinale',
              confidence: 88.0,
              bbox: { x: 62, y: 35, w: 18, h: 42 },
              severity: 'Niveau de danger B',
              depthEstimate: 'Long. estimée: 1.8 m',
              action: 'Enregistré dans le cycle de dégradation prédictive'
            }
          ]
        }
      };
    }

    return {
      pipeguard: {
        name: 'PipeGuard AI (NDT Pipeline Vision)',
        subtitle: 'Master Thesis • Autonomous Surface Crack & Corrosion Localization',
        architecture: 'YOLOv8-Custom + Multi-Scale Feature Pyramid Network (FPN)',
        dataset: '12,500 High-Res NDT Industrial Inspection Frames',
        edgeRuntime: 'ONNX TensorRT GPU Acceleration',
        metrics: {
          latency: '14.2 ms / frame',
          fps: '70 FPS (RTX 4090)',
          map50: '96.4%',
          mAP50_95: '88.1%'
        },
        detections: [
          {
            id: 'def-1',
            type: 'Transverse Surface Crack',
            confidence: 94.8,
            bbox: { x: 38, y: 32, w: 24, h: 36 },
            severity: 'Critical (Class 3)',
            depthEstimate: '2.4 mm',
            action: 'Immediate structural reinforcement required'
          },
          {
            id: 'def-2',
            type: 'Corrosion Pitting Patch',
            confidence: 89.2,
            bbox: { x: 68, y: 55, w: 20, h: 22 },
            severity: 'Moderate (Class 2)',
            depthEstimate: '0.8 mm',
            action: 'Schedule ultrasonic thickness verification'
          }
        ]
      },
      satellite: {
        name: 'ASAL Satellite Anomaly Engine',
        subtitle: 'Algerian Space Agency (ASAL) • Earth Observation & Spectral Analysis',
        architecture: 'Deep Convolutional Autoencoder + Spectral Residuals',
        dataset: 'Multi-Temporal AlSat Multi-Spectral GeoTIFF Tiles (Relizane / Sahara Basin)',
        edgeRuntime: 'CUDA PyTorch Batch Inference',
        metrics: {
          latency: '32.6 ms / tile (512x512)',
          fps: '30 Tiles/sec',
          map50: '94.8%',
          mAP50_95: '85.6%'
        },
        detections: [
          {
            id: 'sat-1',
            type: 'Unregistered Ground Disturbance',
            confidence: 96.1,
            bbox: { x: 45, y: 28, w: 28, h: 30 },
            severity: 'High Anomaly',
            depthEstimate: 'NDVI Drop: -0.42',
            action: 'Flagged for environmental compliance review'
          },
          {
            id: 'sat-2',
            type: 'Moisture Seepage Anomaly',
            confidence: 87.4,
            bbox: { x: 18, y: 62, w: 22, h: 20 },
            severity: 'Medium Anomaly',
            depthEstimate: 'NDWI Index: +0.38',
            action: 'Cross-reference with municipal irrigation telemetry'
          }
        ]
      },
      smartcity: {
        name: 'SHESEM Edge Hazard Vision',
        subtitle: 'Smart City Hackathon • Real-Time Road Defect & Pothole Perception',
        architecture: 'Lightweight Quantized YOLOv8 Nano + GPS Spatial Clustering',
        dataset: '8,200 Algerian Municipal Urban & Highway Road Imagery',
        edgeRuntime: 'Edge TPU / Mobile NPU Optimized',
        metrics: {
          latency: '22.1 ms (Edge NPU)',
          fps: '45 FPS Real-Time',
          map50: '92.5%',
          mAP50_95: '83.2%'
        },
        detections: [
          {
            id: 'city-1',
            type: 'High-Impact Pothole',
            confidence: 93.6,
            bbox: { x: 30, y: 58, w: 26, h: 25 },
            severity: 'Hazard Level A',
            depthEstimate: 'Est. 6.5 cm depth',
            action: 'Automated municipal repair ticket dispatched with GPS: 35.742°N, 0.556°E'
          },
          {
            id: 'city-2',
            type: 'Longitudinal Asphalt Fissure',
            confidence: 88.0,
            bbox: { x: 62, y: 35, w: 18, h: 42 },
            severity: 'Hazard Level B',
            depthEstimate: 'Est. 1.8 m length',
            action: 'Logged into predictive asphalt degradation lifecycle'
          }
        ]
      }
    };
  };

  const modelScenarios = getLocalizedScenarios();
  const currentScenario = modelScenarios[activeModel];

  const visibleDetections = useMemo(() => {
    return currentScenario.detections.filter(d => d.confidence >= confidenceThreshold);
  }, [currentScenario, confidenceThreshold]);

  return (
    <section id="vision-playground" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${
              isLight 
                ? 'bg-indigo-50 border-indigo-200 text-indigo-700' 
                : 'bg-indigo-950/60 border-indigo-500/30 text-indigo-300'
            }`}>
              <Scan className="w-3.5 h-3.5" />
              <span>{t.visionLab.badge}</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              {t.visionLab.title}
            </h2>
            <p className={`text-base ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {t.visionLab.subtitle}
            </p>
          </div>

          {/* Model Switcher Tabs */}
          <div className={`flex items-center gap-1 p-1 rounded-2xl border backdrop-blur-md self-start md:self-auto ${
            isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-900/80 border-slate-800'
          }`}>
            <button
              id="btn-model-pipeguard"
              onClick={() => { setActiveModel('pipeguard'); setSelectedDefect(null); }}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeModel === 'pipeguard'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.visionLab.models.pipeguard}
            </button>
            <button
              id="btn-model-satellite"
              onClick={() => { setActiveModel('satellite'); setSelectedDefect(null); }}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeModel === 'satellite'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.visionLab.models.satellite}
            </button>
            <button
              id="btn-model-smartcity"
              onClick={() => { setActiveModel('smartcity'); setSelectedDefect(null); }}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeModel === 'smartcity'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : isLight ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.visionLab.models.smartcity}
            </button>
          </div>
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Visual Canvas (Simulation) */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className={`relative rounded-2xl border overflow-hidden shadow-2xl transition-colors ${
              isLight 
                ? 'bg-slate-900 border-slate-200 shadow-slate-200' 
                : 'bg-slate-950 border-slate-800 shadow-indigo-950/40'
            }`}>
              
              {/* Canvas Header Bar */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono font-semibold text-white">{currentScenario.name}</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400" dir="ltr">
                  <span>{t.visionLab.latency}: <strong className="text-emerald-400">{currentScenario.metrics.latency}</strong></span>
                  <span>{t.visionLab.fps}: <strong className="text-indigo-400">{currentScenario.metrics.fps}</strong></span>
                </div>
              </div>

              {/* Simulated Camera / Satellite Sensor Viewport */}
              <div className="relative aspect-[16/10] bg-slate-950 flex items-center justify-center overflow-hidden select-none">
                
                {/* Background visual canvas styling based on model */}
                {activeModel === 'pipeguard' && (
                  <div className="absolute inset-0 bg-radial from-slate-800 via-slate-900 to-black opacity-90 flex items-center justify-center">
                    {/* Pipe cross-section graphics */}
                    <div className="w-4/5 h-4/5 rounded-full border-8 border-slate-700/60 relative overflow-hidden flex items-center justify-center">
                      <div className="w-3/4 h-3/4 rounded-full border-4 border-dashed border-indigo-500/30 animate-[spin_60s_linear_infinite]" />
                      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                      {showHeatmap && (
                        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-rose-500/20 blur-xl rounded-full" />
                      )}
                    </div>
                  </div>
                )}

                {activeModel === 'satellite' && (
                  <div className={`absolute inset-0 transition-all ${
                    activeSpectralBand === 'ndvi' 
                      ? 'bg-gradient-to-br from-emerald-950 via-slate-900 to-amber-950' 
                      : activeSpectralBand === 'thermal'
                        ? 'bg-gradient-to-br from-indigo-950 via-rose-950 to-amber-950'
                        : 'bg-gradient-to-br from-slate-900 via-cyan-950/40 to-slate-950'
                  }`}>
                    {/* Topographic contour lines grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
                    {showHeatmap && (
                      <div className="absolute top-1/4 right-1/3 w-40 h-40 bg-amber-500/25 blur-2xl rounded-full" />
                    )}
                  </div>
                )}

                {activeModel === 'smartcity' && (
                  <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
                    {/* Road perspective road grid */}
                    <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
                      <div className="w-2/3 h-full border-x-4 border-slate-700/80 transform perspective-500 rotate-x-20 bg-slate-950 relative">
                        <div className="w-1 h-full border-r-2 border-dashed border-amber-400/60 mx-auto" />
                      </div>
                      {showHeatmap && (
                        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-rose-500/25 blur-xl rounded-full" />
                      )}
                    </div>
                  </div>
                )}

                {/* Real-time laser scanning line animation */}
                {isPlaying && (
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-lg shadow-cyan-500/50 animate-[bounce_3s_ease-in-out_infinite] pointer-events-none z-10" />
                )}

                {/* Render Detection Bounding Boxes */}
                {visibleDetections.map((det) => {
                  const isSelected = selectedDefect === det.id;
                  return (
                    <div
                      key={det.id}
                      onClick={() => setSelectedDefect(det.id)}
                      style={{
                        left: `${det.bbox.x}%`,
                        top: `${det.bbox.y}%`,
                        width: `${det.bbox.w}%`,
                        height: `${det.bbox.h}%`
                      }}
                      className={`absolute border-2 rounded-lg cursor-pointer transition-all duration-200 group z-20 ${
                        isSelected 
                          ? 'border-emerald-400 bg-emerald-500/20 shadow-lg shadow-emerald-500/30' 
                          : 'border-cyan-400/90 bg-cyan-500/10 hover:border-white hover:bg-cyan-500/20'
                      }`}
                    >
                      {/* BBox Header Tag */}
                      <div className={`absolute -top-7 left-0 px-2 py-0.5 rounded text-[10px] font-mono font-bold whitespace-nowrap shadow-md flex items-center gap-1 ${
                        isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-cyan-500 text-slate-950'
                      }`}>
                        <span>{det.type}</span>
                        <span>({det.confidence}%)</span>
                      </div>

                      {/* Corner crosshairs */}
                      <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-white" />
                      <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-white" />
                      <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-white" />
                      <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-white" />
                    </div>
                  );
                })}

                {/* HUD Viewport Overlays */}
                <div className="absolute top-3 left-3 font-mono text-[10px] text-slate-400 space-y-1 bg-slate-950/80 p-2 rounded-lg border border-slate-800 backdrop-blur-sm pointer-events-none" dir="ltr">
                  <div>TARGET: {activeModel.toUpperCase()}_STREAM_01</div>
                  <div>DETECTED: {visibleDetections.length} ANOMALIES</div>
                  <div>THRESHOLD: ≥ {confidenceThreshold}%</div>
                </div>

                <div className="absolute bottom-3 right-3 font-mono text-[10px] text-slate-400 bg-slate-950/80 px-2 py-1 rounded-lg border border-slate-800 backdrop-blur-sm pointer-events-none" dir="ltr">
                  STATUS: 🟢 INFERENCE STABLE
                </div>

              </div>

              {/* Viewport Control Strip */}
              <div className="bg-slate-900 px-4 py-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
                    <span>{isPlaying ? t.visionLab.controls.pause : t.visionLab.controls.play}</span>
                  </button>

                  <button
                    onClick={() => setShowHeatmap(!showHeatmap)}
                    className={`px-3 py-1.5 rounded-lg font-mono flex items-center gap-1.5 transition-colors cursor-pointer ${
                      showHeatmap ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{t.visionLab.controls.heatmap}</span>
                  </button>

                  {activeModel === 'satellite' && (
                    <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800 text-[11px] font-mono" dir="ltr">
                      <button
                        onClick={() => setActiveSpectralBand('rgb')}
                        className={`px-2 py-1 rounded ${activeSpectralBand === 'rgb' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
                      >
                        {t.visionLab.controls.rgb}
                      </button>
                      <button
                        onClick={() => setActiveSpectralBand('ndvi')}
                        className={`px-2 py-1 rounded ${activeSpectralBand === 'ndvi' ? 'bg-emerald-600 text-white' : 'text-slate-400'}`}
                      >
                        {t.visionLab.controls.ndvi}
                      </button>
                      <button
                        onClick={() => setActiveSpectralBand('thermal')}
                        className={`px-2 py-1 rounded ${activeSpectralBand === 'thermal' ? 'bg-rose-600 text-white' : 'text-slate-400'}`}
                      >
                        {t.visionLab.controls.thermal}
                      </button>
                    </div>
                  )}
                </div>

                {/* Confidence Slider */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <span className="text-[11px] font-mono text-slate-400">{t.visionLab.controls.threshold}:</span>
                  <input
                    type="range"
                    min="75"
                    max="98"
                    value={confidenceThreshold}
                    onChange={(e) => setConfidenceThreshold(Number(e.target.value))}
                    className="w-24 sm:w-28 accent-indigo-500 cursor-pointer"
                  />
                  <span className="text-xs font-mono font-bold text-indigo-400">{confidenceThreshold}%</span>
                </div>
              </div>

            </div>

            {/* Architecture Details Banner */}
            <div className={`p-4 rounded-xl border text-xs space-y-1 font-mono ${
              isLight ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-slate-900/60 border-slate-800 text-slate-400'
            }`}>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-500 shrink-0" />
                <span className="text-slate-900 dark:text-slate-200 font-semibold">{t.visionLab.architecture}:</span>
                <span dir="ltr">{currentScenario.architecture}</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-slate-900 dark:text-slate-200 font-semibold">{t.visionLab.runtime}:</span>
                <span>{currentScenario.dataset}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Diagnostic Inspector & Detected Anomaly Card */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Real-time Telemetry Card */}
            <div className={`p-6 rounded-2xl border space-y-5 transition-colors ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/60 border-slate-800'
            }`}>
              <div className="flex items-center justify-between border-b pb-3 border-slate-200 dark:border-slate-800">
                <h3 className={`text-base font-bold flex items-center gap-2 ${
                  isLight ? 'text-slate-900' : 'text-white'
                }`}>
                  <Activity className="w-4 h-4 text-indigo-500" />
                  <span>{t.visionLab.liveTelemetry}</span>
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
                  GPU SYNC OK
                </span>
              </div>

              {/* Metric Matrix */}
              <div className="grid grid-cols-2 gap-3">
                <div className={`p-3 rounded-xl border text-center ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
                }`}>
                  <div className="text-lg font-bold font-mono text-indigo-600 dark:text-indigo-400">
                    {currentScenario.metrics.map50}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium uppercase">mAP @ 0.50 IoU</div>
                </div>

                <div className={`p-3 rounded-xl border text-center ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
                }`}>
                  <div className="text-lg font-bold font-mono text-cyan-600 dark:text-cyan-400">
                    {currentScenario.metrics.latency}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium uppercase">{t.visionLab.latency}</div>
                </div>

                <div className={`p-3 rounded-xl border text-center ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
                }`}>
                  <div className="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400">
                    {currentScenario.metrics.fps}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium uppercase">{t.visionLab.fps}</div>
                </div>

                <div className={`p-3 rounded-xl border text-center ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
                }`}>
                  <div className="text-lg font-bold font-mono text-purple-600 dark:text-purple-400">
                    {currentScenario.metrics.mAP50_95}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium uppercase">mAP @ 0.5:0.95</div>
                </div>
              </div>

              {/* Detected Anomalies Inspector List */}
              <div className="space-y-2.5 pt-2">
                <span className={`text-xs font-semibold uppercase tracking-wider block ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  {t.visionLab.detectionsFound} ({visibleDetections.length})
                </span>

                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {visibleDetections.map((det) => {
                    const isSelected = selectedDefect === det.id;
                    return (
                      <div
                        key={det.id}
                        onClick={() => setSelectedDefect(det.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all space-y-1.5 ${
                          isSelected
                            ? 'bg-indigo-50 border-indigo-400 text-indigo-950 dark:bg-indigo-950/60 dark:border-indigo-500 dark:text-indigo-100 shadow-xs'
                            : isLight
                              ? 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                              : 'bg-slate-950 hover:bg-slate-800/60 border-slate-800 text-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className="flex items-center gap-1.5">
                            <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                            <span>{det.type}</span>
                          </span>
                          <span className="font-mono text-indigo-600 dark:text-indigo-300">{det.confidence}%</span>
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                          <span>{t.visionLab.severity}: <strong>{det.severity}</strong></span>
                          <span>{t.visionLab.depthMeasure}: {det.depthEstimate}</span>
                        </div>
                        <p className="text-[11px] leading-relaxed pt-1 border-t border-slate-200/60 dark:border-slate-800/60 text-slate-600 dark:text-slate-300">
                          {det.action}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Model Paper Anchor */}
              <div className="pt-2">
                <a
                  href="#publications"
                  className="w-full py-2.5 px-4 text-center rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-600/20"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.publications.title}</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
