import jsPDF from 'jspdf';
import confetti from 'canvas-confetti';
import { ProfileData, ProjectItem, SkillItem, ExperienceItem, EducationItem, CertificationItem } from '../types';

export interface ResumeDataProps {
  profile: ProfileData;
  projects: ProjectItem[];
  skills: SkillItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}

export function generatePdfResume({
  profile,
  projects,
  skills,
  experience,
  education,
  certifications
}: ResumeDataProps): void {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 14;
    const contentWidth = pageWidth - margin * 2;
    let y = 18;

    // Helper to check page break
    const checkPageBreak = (neededHeight: number) => {
      if (y + neededHeight > pageHeight - 15) {
        doc.addPage();
        y = 16;
        return true;
      }
      return false;
    };

    // --- Header Section ---
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text(profile.name, margin, y);
    y += 6.5;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(79, 70, 229); // Indigo-600
    doc.text(profile.title.toUpperCase(), margin, y);
    y += 5.5;

    // Contact info bar
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105); // Slate-600
    const contactLine = `${profile.email}  |  ${profile.phone || '+1 (555) 234-5678'}  |  ${profile.location}  |  github.com  |  linkedin.com`;
    doc.text(contactLine, margin, y);
    y += 4;

    // Top subtle divider
    doc.setDrawColor(203, 213, 225); // Slate-300
    doc.setLineWidth(0.4);
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;

    // --- Section Helper ---
    const renderSectionHeader = (title: string) => {
      checkPageBreak(12);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      doc.text(title.toUpperCase(), margin, y);
      y += 2;
      doc.setDrawColor(79, 70, 229);
      doc.setLineWidth(0.8);
      doc.line(margin, y, margin + 28, y);
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.3);
      doc.line(margin + 28, y, pageWidth - margin, y);
      y += 5;
    };

    // --- Professional Summary ---
    renderSectionHeader('Professional Summary');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(51, 65, 85);
    
    const summaryText = profile.bioParagraphs.slice(0, 2).join(' ');
    const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
    doc.text(splitSummary, margin, y);
    y += splitSummary.length * 4.2 + 4;

    // --- Technical Skills Matrix ---
    renderSectionHeader('Technical Skills');
    doc.setFontSize(8.5);
    
    const skillCategories = [
      {
        name: 'Languages & Runtimes',
        items: skills.filter(s => s.category === 'Frontend' || s.category === 'Backend').slice(0, 6).map(s => s.name).join(', ')
      },
      {
        name: 'Cloud, DevOps & Infra',
        items: skills.filter(s => s.category === 'Cloud & DevOps').map(s => s.name).join(', ')
      },
      {
        name: 'AI, Data & Databases',
        items: skills.filter(s => s.category === 'AI & Data' || s.category === 'Backend').slice(0, 5).map(s => s.name).join(', ')
      },
      {
        name: 'Architecture & Tools',
        items: skills.filter(s => s.category === 'Architecture & Tools').map(s => s.name).join(', ')
      }
    ];

    skillCategories.forEach(cat => {
      checkPageBreak(6);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(30, 41, 59);
      doc.text(`•  ${cat.name}: `, margin, y);
      const prefixWidth = doc.getTextWidth(`•  ${cat.name}: `);
      
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(71, 85, 105);
      const remainingWidth = contentWidth - prefixWidth;
      const textLines = doc.splitTextToSize(cat.items, remainingWidth);
      doc.text(textLines, margin + prefixWidth, y);
      y += textLines.length * 4 + 1.5;
    });
    y += 3;

    // --- Professional Experience ---
    renderSectionHeader('Professional Experience');

    experience.forEach((exp) => {
      checkPageBreak(30);

      // Title and Period on same line
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text(exp.role, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(100, 116, 139);
      const periodText = `${exp.period}  |  ${exp.location}`;
      const periodWidth = doc.getTextWidth(periodText);
      doc.text(periodText, pageWidth - margin - periodWidth, y);
      y += 4.5;

      // Company and type
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(79, 70, 229);
      doc.text(exp.company, margin, y);
      y += 4.5;

      // Achievements bullets
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);

      exp.achievements.forEach((ach) => {
        checkPageBreak(8);
        const bulletPrefix = '–  ';
        const prefixW = doc.getTextWidth(bulletPrefix);
        doc.text(bulletPrefix, margin + 2, y);
        const achLines = doc.splitTextToSize(ach, contentWidth - 8);
        doc.text(achLines, margin + 2 + prefixW, y);
        y += achLines.length * 4 + 1.2;
      });

      y += 2.5;
    });

    // --- Featured Key Projects ---
    renderSectionHeader('Key Engineering Projects');

    projects.slice(0, 3).forEach((proj) => {
      checkPageBreak(18);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(15, 23, 42);
      doc.text(`${proj.title}`, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(100, 116, 139);
      const stackText = proj.techStack.slice(0, 5).join(', ');
      const stackWidth = doc.getTextWidth(`[${stackText}]`);
      doc.text(`[${stackText}]`, pageWidth - margin - stackWidth, y);
      y += 4;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      const descLines = doc.splitTextToSize(proj.summary, contentWidth - 4);
      doc.text(descLines, margin + 2, y);
      y += descLines.length * 4 + 2;
    });

    // --- Education & Certifications ---
    renderSectionHeader('Education & Certifications');
    
    education.forEach((edu) => {
      checkPageBreak(12);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(15, 23, 42);
      doc.text(edu.degree, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(100, 116, 139);
      const eduPeriod = `${edu.period} | ${edu.location}`;
      doc.text(eduPeriod, pageWidth - margin - doc.getTextWidth(eduPeriod), y);
      y += 4;

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(71, 85, 105);
      doc.text(`${edu.institution}  •  ${edu.honors || ''}`, margin, y);
      y += 5.5;
    });

    if (certifications.length > 0) {
      checkPageBreak(10);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(30, 41, 59);
      doc.text('Key Credentials: ', margin, y);
      const certLabelW = doc.getTextWidth('Key Credentials: ');
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(71, 85, 105);
      const certList = certifications.map(c => `${c.name} (${c.issuer})`).join('  •  ');
      const certLines = doc.splitTextToSize(certList, contentWidth - certLabelW);
      doc.text(certLines, margin + certLabelW, y);
      y += certLines.length * 4 + 4;
    }

    // Save the PDF
    const filename = `${profile.name.replace(/\s+/g, '_')}_Resume.pdf`;
    doc.save(filename);

    // Trigger celebratory confetti
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });
  } catch (error) {
    console.error('Error generating PDF resume:', error);
    alert('There was an issue generating the PDF. You can also use the print preview view to save as PDF.');
  }
}
