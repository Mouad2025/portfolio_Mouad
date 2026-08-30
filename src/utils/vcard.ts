import { ProfileData } from '../types';

export function downloadVCard(profile: ProfileData) {
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:Bouhadiba;Mouâd;;;
FN:${profile.name}
TITLE:${profile.title}
ORG:University of Relizane / AIDSS Research
EMAIL;TYPE=INTERNET,PREF:${profile.email}
TEL;TYPE=CELL,VOICE:${profile.phone || '+213542994693'}
ADR;TYPE=WORK,POSTAL,PARCEL:;;${profile.location};;;;
URL;TYPE=WORK:${profile.website}
URL;TYPE=LINKEDIN:https://www.linkedin.com/in/bouhadiba-mou%C3%A2d-6914052a6
URL;TYPE=GITHUB:https://github.com/Mouad2025
NOTE:${profile.tagline}
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Bouhadiba_Mouad_Contact.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
