import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generateBrochurePDF = async () => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  
  // Cover page
  pdf.setFillColor(25, 35, 45);
  pdf.rect(0, 0, pageWidth, pageHeight, 'F');
  
  // Title
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(28);
  pdf.setFont('helvetica', 'bold');
  pdf.text('OLYMPUS RETREAT', pageWidth / 2, 50, { align: 'center' });
  
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Where Wellness Meets Elegance', pageWidth / 2, 70, { align: 'center' });
  
  // Add decorative element
  pdf.setDrawColor(186, 159, 103);
  pdf.setLineWidth(2);
  pdf.line(margin, 90, pageWidth - margin, 90);
  
  // Subtitle
  pdf.setFontSize(14);
  pdf.text('50 Exclusive Villas on 12 Pristine Acres', pageWidth / 2, 110, { align: 'center' });
  pdf.text('Surrounded by Water and Nature', pageWidth / 2, 125, { align: 'center' });
  
  // Add new page for content
  pdf.addPage();
  
  // Reset colors for content pages
  pdf.setFillColor(255, 255, 255);
  pdf.rect(0, 0, pageWidth, pageHeight, 'F');
  pdf.setTextColor(0, 0, 0);
  
  // Project Overview
  pdf.setFontSize(20);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Project Overview', margin, 30);
  
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  const overviewText = `Our luxury villa estate represents the pinnacle of sustainable living, where cutting-edge wellness technology meets elegant design. Located just 30 kilometers from Pune, this exclusive development offers 50 meticulously designed villas across 12 pristine acres of water-surrounded paradise.

Each villa is a masterpiece of modern architecture, featuring smart home automation, private cinemas, state-of-the-art gyms, and wellness facilities that rival the world's finest spas. Our commitment to longevity and health is evident in every detail, from the building materials to the integrated wellness systems.`;
  
  const splitText = pdf.splitTextToSize(overviewText, pageWidth - 2 * margin);
  pdf.text(splitText, margin, 45);
  
  // Villa Features
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Villa Features', margin, 110);
  
  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'normal');
  const features = [
    '• Smart Home Technology by Loytec',
    '• Private Cinema with Premium Entertainment Systems',
    '• Private Gym with Technogym Equipment',
    '• Luxury Lighting by Lalique',
    '• Premium Glassware by Baccarat',
    '• Professional Kitchens by Gaggenau',
    '• Designer Furniture by Bentley',
    '• Fine Dining Collection by Bernardaud',
    '• Prestigious Flatware by Christofle',
    '• Luxury Bed Linen by Frette'
  ];
  
  let yPos = 125;
  features.forEach(feature => {
    pdf.text(feature, margin, yPos);
    yPos += 8;
  });
  
  // Wellness & Technology section
  pdf.addPage();
  pdf.setFillColor(255, 255, 255);
  pdf.rect(0, 0, pageWidth, pageHeight, 'F');
  
  pdf.setFontSize(20);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(0, 0, 0);
  pdf.text('Wellness & Technology', margin, 30);
  
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  const wellnessText = `Experience cutting-edge therapies designed for optimal health, fitness, and aesthetic goals. Our world-renowned modalities include:

• Whole Body Cryotherapy
• IV Drip Therapy  
• Red Light Therapy
• EMS Training
• Advanced Building Automation
• Biometric Security Systems
• Automated Climate Control
• Emergency Response Systems

Each villa features comprehensive building automation including sophisticated security systems with biometric access controls, facial recognition, and fingerprint scanning. Smart lighting and HVAC systems automatically adjust for energy efficiency and comfort.`;
  
  const wellnessSplit = pdf.splitTextToSize(wellnessText, pageWidth - 2 * margin);
  pdf.text(wellnessSplit, margin, 45);
  
  // Contact Information
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Contact Information', margin, 180);
  
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Phone: +91 XXX XXX XXXX', margin, 195);
  pdf.text('Email: info@olympusretreat.com', margin, 205);
  pdf.text('Location: 30 km from Pune, Maharashtra', margin, 215);
  
  // Footer
  pdf.setFontSize(8);
  pdf.setTextColor(128, 128, 128);
  pdf.text('© 2024 Olympus Retreat. All rights reserved.', pageWidth / 2, pageHeight - 10, { align: 'center' });
  
  // Save the PDF
  pdf.save('olympus-retreat-brochure.pdf');
};