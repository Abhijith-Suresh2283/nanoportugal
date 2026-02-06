'use client';

import { useState, useRef } from 'react';

export default function SpeakersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const speakersRef = useRef(null);
  const SPEAKERS_PER_PAGE = 21; // 3 columns × 7 rows

  const speakers = [
    {
      name: "Ibrahim Dincer (Plenary)",
      institution: "Ontario Tech University",
      country: "Canada",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/92.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/Abstract-Ibrahim-Dincer-ANM2025.docx"
    },
    {
      name: "Prof. Ajayan Vinu (Plenary)",
      institution: "The University of Newcastle",
      country: "Australia",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/93.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/Ajayan-Vinu.pdf"
    },
    {
      name: "Luiz Pereira (Plenary)",
      institution: "University of Aveiro",
      country: "Portugal",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/94.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/ANM2025-abstract-LuizPereira.pdf" 
    },
    {
      name: "Prof. Luis Cadillon Costa",
      institution: "University of Aveiro",
      country: "Portugal",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/95.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/ANM_2025_LCC-2.docx"
    },
    {
      name: "Necmettin Kilinc",
      institution: "Department of Physics, Faculty of Science & Arts, Inonu University, Malataya",
      country: "Türkiye",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/96.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/ANM2025-PdAu-alloy-hydrogen-sensor.pdf"
    },
    {
      name: "Cláudia Lopes",
      institution: "CICECO – University of Aveiro",
      country: "Portugal",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/97.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/ANM2025-abstract-Claudia-Batista-Lopes.pdf" 
    },
    {
      name: "Eunsang Kwon",
      institution: "Tohoku University",
      country: "Japan",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/1.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/ec939e99-d54c-4b71-943c-1cf8bac6f965/ANM2025-abstract_Prof.%20Eunsang%20Kwon%2C%20Thohoku%20University.pdf?view=open"
    },
    {
      name: "ARAB Madjid",
      institution: "Toulon University, Aix Marseille University CNRS IM2NP",
      country: "France",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/arab.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/a6a27f22-db49-4484-ab62-f80044879e28/biography_M%20Arab.docx?view=open"
    },
    {
      name: "Petr Smolka",
      institution: "Department of Physics and Materials Engineering, Faculty of Technology, Tomas Bata University in Zlín ",
      country: "Czech Republic",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/petersmolka.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/d9fd9ef0-3abe-41f7-921c-3ac92d4c2475/Petr%20Smolka%20-%20ANM2022-abstract.pdf?view=open" 
    },
    {
      name: "Meltem Yanilmaz",
      institution: "ITU",
      country: "Turkiye",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/4.jpg",
      abstract: "#"
    },
    {
      name: "Heiko Reith",
      institution: "IFW Dresden",
      country: "Germany",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/5.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/955ad275-1555-4c00-af7b-1358c969f7fb/ANM2025-Reith.pdf?view=open"
    },
    {
      name: "Beatriz",
      institution: "Universidad Rey Juan Carlos",
      country: "España",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/6.png",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/2f838a51-56ab-470a-add5-4280c81d5982/ANM2025-BGS.pdf?view=open" 
    },
    {
      name: "Matjaž Malok",
      institution: "Jozef Stefan Institute",
      country: "Slovenija",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/7.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/ANM2025-Malok-Electrical-properties-of-collapsed-MoS2-nanotubes.pdf"
    },
    {
      name: "Ilona Smolkova",
      institution: "Tomas Bata University in Zlín",
      country: "Česko",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/9.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/1e06873d-b244-419b-944f-8aa1361725c2/ANM2025-abstract-Smolkova.pdf?view=open"
    },
    {
      name: "Unai Iriarte",
      institution: "University of the Baque Country (UPV/EHU)",
      country: "Spain",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/8.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/5e2b0f39-ba1b-4592-b54f-ce5af71d9e68/ANM2025-abstract-97.pdf?view=open"
    },
    {
      name: "Maliheh Nazarik",
      institution: "PhD Student in Nanoscience and Nanotechnology, Department of Physics, University of Aveiro, Aveiro, Portugal",
      country: "Portugal",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/10.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/f2e64836-d8e8-4c23-b8d2-aeb131705805/ANM2025%2C%20Aveiro%2C%20Portugal.pdf?view=open"
    },
    {
      name: "Gianguido Ramis",
      institution: "University of Genoa",
      country: "Italy",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/11.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/fb2a3219-5128-4ebc-bb72-a386f6d4f3e6/ANM2025-Ramis_photoCO2_SEM.pdf?view=open"
    },
    {
      name: "Denis Cutcovschi",
      institution: "Technical University “Gh. Asachi” of Iasi",
      country: "Romania",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/12.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/e6dd1d28-e189-4338-a7c5-8151448b7d2d/Denis%20Cutcovschi%20Abstract%20ANM%202025.pdf?view=open"
    },
    {
      name: "Cristina Antuña Nieto",
      institution: "CSIC-INCAR",
      country: "Spain",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/14.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/bf5ec618-7573-4710-a209-66a85d3bf40c/ANM2022-Bat.pdf?view=open"
    },
    {
      name: "Catalina-Diana Usurelu",
      institution: "National Institute for Research & Development in Chemistry and Petrochemistry– ICECHIM, Bucharest, Romania",
      country: "Romania",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/13.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/934c297c-9a5e-4b31-9700-658fe98b73c7/ANM2025-abstract-Usurelu%20Catalina-Diana.doc?view=open"
    },
    {
      name: "JEONG HO CHANG",
      institution: "KOREA INSTITUTE OF CERAMIC ENGINEERING AND TECHNOLOGY (KICET)",
      country: "KOREA (REPUBLIC OF)",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/15.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/5e1f1fdb-b3b7-42f5-9310-f81513cf9e45/214_abstract%20(JHChang).pdf?view=open"
    },
    {
      name: "Andrzej Wawro",
      institution: "Institute of Physics Polish Academy of Sciences",
      country: "Poland",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/16.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/46f32326-681a-417d-ac26-a1bd9850275d/Wawro_abstract_ANM2025.pdf?view=open"
    },
    {
      name: "Sara RABIA",
      institution: "IETR UMR CNRS 6164, FunMAT team",
      country: "France",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/17.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/cf2dbf14-d02c-4947-8afd-242f105b6659/Abstract-Aveiro-Templa.docx?view=open"
    },
    {
      name: "M Ravi Kiran",
      institution: "Indian Institute of Petroleum and Energy",
      country: "India",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/18.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/9b50c146-82bf-4782-9e96-5f5256e3703c/ANM2022-abstract-template.pdf?view=open"
    },
    {
      name: "Ivana Troppová",
      institution: "Institute of Environmental Technology, CEET, VSB-Technical University of Ostrava",
      country: "Czech Republic",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/19.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/0b39be27-5edd-4b1e-8b08-7effed216b15/ANM2025-abstract_TroppovaIvana.pdf?view=open"
    },
    {
      name: "Nan Li",
      institution: "Northwestern Polytechnical University",
      country: "China",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/20.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/ef54af50-87f3-4f66-bb99-ebd1617048ea/ANM-2025-abstract.docx?view=open"
    },
    {
      name: "Jean-Fabien Capsal",
      institution: "Laboratoire de Génie Electrique et Ferroélectricité, Université de Lyon, INSA-Lyon ",
      country: "France",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/21.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/c2489310-d075-4724-b610-e8ea2a365422/Abstract_JFC_LGEF_ANM2025(1).docx?view=open"
    },
    {
      name: "Rachid IDouhli",
      institution: "Cady ayyad university",
      country: "Maroc",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/25.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/65994de1-6d8f-4500-9ca3-e23e9d0ae8a1/ANM2025-abstract-idouhli%20N%20211.doc?view=open"
    },
    {
      name: "Shing-Yi Suen",
      institution: "National Chung Hsing University",
      country: "Taiwan",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/23.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/5b2667dc-b12f-4a2b-b291-c041537bb161/ANM2025-abstract.pdf?view=open"
    },
    {
      name: "Qin HUANG",
      institution: "Beijing Jiaotong University",
      country: "China",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/24.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/ebfaebc7-8d9b-46e7-a3b1-8d7978bda5f1/Abstract-Qin%20HUANG.pdf?view=open"
    },
    {
      name: "Adrian Petraru",
      institution: "Nanoelectronics, Institute of Electrical Engineering and Information Engineering, Kiel University",
      country: "Germany",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/22.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/87ae1248-a55c-49eb-8df7-685842540644/ANM2025-abstract-Adrian_Petraru.pdf?view=open"
    },
    {
      name: "Rahul R. Bhosale",
      institution: "Department of Chemical Engineering, University of Tennessee, 615 Mccallie Ave, Chattanooga, TN 37403, USA",
      country: "United States",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/26.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/6d5d929a-c432-4378-8129-9d0fb465385b/ANM-1-Perovskite-Keynote-F.pdf?view=open"
    },
    {
      name: "Banaś-Gac Joanna",
      institution: "AGH University of Krakow",
      country: "Poland",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/27.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/7b108991-2e71-4e16-a2fb-fb4c680f608a/14-03-25-ANM2025-abstract-JBG.pdf?view=open"
    },
    {
      name: "Dr. Monika Furko",
      institution: "Centre for Energy Research, HUN-REN, H-1121 Konkoly-Thege rd. 29-33, Budapest",
      country: "Hungary",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/28.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/1c84b0d5-1cec-426b-a6d3-f62b4447fe99/ANM2022-abstract-Monika%20Furko.pdf?view=open"
    },
    {
      name: "Aurelian Crunteanu",
      institution: "XLIM Research Institute, CNRS/ University of Limoges",
      country: "France",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/29.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/e97b9b40-5279-4974-9793-61245d47edf7/ANM2025_AC_XLIM.pdf?view=open"
    },
    {
      name: "Dr. Piyali Chatterjee",
      institution: "Jagiellonian University",
      country: "Poland",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/30.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/bc45c498-1189-4158-a964-0f46e4e8071f/ANM-abstract-piyali.pdf?view=open"
    },
    {
      name: "Dalila Antunes",
      institution: "Factor Social Lda",
      country: "Portugal",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/31.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/fcd7c3ea-fa40-4cdf-8008-e41173e6af0a/TRL%20abstract2.pdf?view=open"
    },
    {
      name: "Kwonwoo Shin",
      institution: "Korea Electronics Technology Institute",
      country: "Republic of Korea",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/32.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/4fbd6c10-7251-49a6-9c85-2d749e5d6e2b/ANM2022-%EA%B3%A0%EB%82%B4%EC%97%B4%20ALD%20AgNW.doc?view=open"
    },
    {
      name: "Kendra Damaske",
      institution: "Biola University",
      country: "United States",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/33.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/f5d50808-3134-4082-a8a3-396623e2d2c8/Nano-formulations%20ANM2025%20(1).pdf?view=openhttps://t9016861658.p.clickup-attachments.com/t9016861658/f5d50808-3134-4082-a8a3-396623e2d2c8/Nano-formulations%20ANM2025%20(1).pdf?view=open"
    },
    {
      name: "Katarzyna Płacheta",
      institution: "AGH University of Krakow",
      country: "Poland",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/34.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/f96cb181-0331-48f2-8b20-9762abe991db/ANM2025-abstract-KP_final.pdf?view=open"
    },
    {
      name: "Rui S. Costa",
      institution: "IFIMUP – FCUP",
      country: "Portugal",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/35.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/f826698a-4d24-497a-9c4a-91dc28050553/ANM2025-RSC.pdf?view=open"
    },
    {
      name: "Sheta Mohamed",
      institution: "National Research Centre",
      country: "Egypt",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/36.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/2f838a51-56ab-470a-add5-4280c81d5982/ANM2025-BGS.pdf?view=open"
    },
    {
      name: "Ali Hassan",
      institution: "Institute of Physics of the Czech Academy of Sciences",
      country: "Czech Republic",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/37.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/31779275-d23d-4dc0-b7c0-ea7e3f0bbf95/ANM2025-Hassan_Co-Ni-ferrite.docx?view=open"
    },
    {
      name: "Eva Mihokova",
      institution: "Institute of Physics of the Czech Academy of Sciences, Prague, 162 00",
      country: "Czech Republic",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/38.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/22dca048-5bcc-4b0b-9d2c-8974c87b0bd0/ANM2025-abstract-Mihokova.pdf?view=open"
    },
    {
      name: "Eric Fuster Navarro",
      institution: "Instituto de Tecnología Química (ITQ UPV-CSIC)",
      country: "Spain",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/39.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/ec389315-ba64-4c0f-bca6-31cb74c771bb/EFuster-ANM2025-Abstract.pdf?view=open"
    },
    {
      name: "Miklos Csontos",
      institution: "Institute of Electromagnetic Fields, ETH Zurich",
      country: "Switzerland",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/40.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/7085ea27-f715-4d43-b1d0-251eb2ce01d5/ANM2025-abstract-Csontos.pdf?view=open"
    },
    {
      name: "Hana Kmentová",
      institution: "RCPTM/CATRIN, Palacký University Olomouc",
      country: "Czech republic",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/41.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/23f5feae-a4e0-4a8f-b4ba-7bd313ecde88/abstract.pdf?view=open"
    },
    {
      name: "Ilenia Rossetti",
      institution: "University of Milan",
      country: "Italy",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/42.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/1ce4b944-404f-429d-b677-d58e8e548b89/ANM2025-Rossetti_Adsorption_ANM.pdf?view=open"
    },
    {
      name: "Teresa Esteves",
      institution: "Instituto Superior Técnico – Universidade de Lisboa",
      country: "Portugal",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/43.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/bccae6f6-1880-4569-81fe-d01941e13c47/Abstract%20-%20Teresa%20Esteves.pdf?view=open"
    },
    {
      name: "Timon Günther",
      institution: "University of Augsburg",
      country: "Deutschland",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/44.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/a3c7feaa-6e40-4e20-870a-18f380f12e92/ANM2025%20-%20Abstract%20Timon%20G%C3%BCnther.pdf?view=open"
    },
    {
      name: "Jean-Christophe ORLIANGES",
      institution: "XLIM",
      country: "France",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/45.png",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/26226f0b-5b34-4ca3-8648-e1caab9c313b/ANM2022-CdTePLD_VF.pdf?view=open"
    },
    {
      name: "Sridhar Dalai",
      institution: "School of Engineering and Applied Science, Ahmedabad University",
      country: "India",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/46.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/5133f47c-b1c3-44cf-83c5-cbf978caa190/ANM%202025_Abstract_Sridhar%20Dalai.pdf?view=open"
    },
    {
      name: "SangYong Nam",
      institution: "Gyeongsang National University",
      country: "South Korea",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/47.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/15048fa1-3f80-4f0c-9955-baf2ff168325/ANM2025-abstract-Water%20electrolysis.doc?view=open"
    },
    {
      name: "Kyu-Yeon Lee",
      institution: "Yonsei University",
      country: "South Korea",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/48.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/f5d50808-3134-4082-a8a3-396623e2d2c8/Nano-formulations%20ANM2025%20(1).pdf?view=open"

    {
      name: "Hyung-Ho Park",
      institution: "Yonsei University",
      country: "Korea (south)",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/49.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/c6b83bb0-3a7a-4572-9a2a-d484720e3afe/ANM2025Abstract-Hyung-Ho%20Park.pdf?view=open"
    },

    {
      name: "Prof. Pranab Goswami",
      institution: "IIT Guwahati",
      country: "India",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/50.jpg",
      abstract: "#"
    },

    {
      name: "Francisco De Santiago Varela",
      institution: "Instituto de Fisica, UNAM",
      country: "Mexico",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/36.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/1ed30773-cf1e-47b5-9c0b-f250d24899af/anm2025_gecbilayer_FD1.pdf?view=open"
    },

    {
      name: "Francesca Demichelis",
      institution: "Politecnico di Torino",
      country: "Politecnico di Torino",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/53.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/a631c762-1ad2-4b92-8dde-2714c7b46b12/Demichelis_H2_production_ANM2022_22_11_2024.pdf?view=open"
    },

    {
      name: "Giancarlo Iván González Muñoz",
      institution: "PhD student",
      country: "Chile",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/52.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/f4ef9050-90f1-4a68-8b9e-0f608a70743f/Abstract%20Giancarlo%20Gonzalez.pdf?view=open"
    },

    {
      name: "Younes CHAALI",
      institution: "Laboratory of Physical Chemistry of Materials (LPCM),Chouaib Doukkali University, El Jadida",
      country: "Morocco",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/54.jpeg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/e21bec09-5777-4caf-b41c-c6ce4330ecaf/ANM2025-abstract-Younes%20CHAALI.pdf?view=open"
    },

    {
      name: "Victor Manuel C. F. Balcão",
      institution: "University of Sorocaba (VBlab)",
      country: "Brazil",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/54.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/b881d9a7-e1a1-4fdb-a744-63ef7e34a913/ANM2025-abstract-VictorBalc%C3%A3o.pdf?view=open"
    },

    {
      name: "Luis Angel Arellanes-Mendoza",
      institution: "Universidad Tecnológica de la Mixteca",
      country: "México",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/56.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/1d97ea83-6388-435f-9cc0-4084ab57713c/Poster_LAI.pdf?view=open"
    },

    {
      name: "Fernando Gonzalez Zavala",
      institution: "Centro Conjunto de Investigación en Química Sustentable UAEM-UNAM",
      country: "México",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/57.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/cd79ca4a-2782-4005-bb21-f63c47862cdb/ANM2025%20TiO2Co%20precipitates%20for%20Photocatalytic%20degradation%20of%20organic%20molecules.pdf?view=open"
    },

    {
      name: "VSR JAMPANI",
      institution: "Jozef Stefan Institute",
      country: "Slovenia",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/58.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/d9d13e6a-c59f-4702-92d0-4a469539a086/ANM%202025%20Portugal_Invited%20talk.pdf?view=open"
    },

    {
      name: "Jorge Gajardo",
      institution: "Universidad de Concepción",
      country: "Chile",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/05/59.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/a3c7feaa-6e40-4e20-870a-18f380f12e92/ANM2025%20-%20Abstract%20Timon%20G%C3%BCnther.pdf?view=open"
    },

    {
      name: "Dr. Irum Shaheen",
      institution: "Queen Mary University of London",
      country: "UK",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/90.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/a5836d78-f5c8-4e6f-b748-75fa506bc00d/Abstract.pdf?view=open"
    },

    {
      name: "Paulina Kapuścik",
      institution: "Wroclaw University of Science and Technology",
      country: "Poland",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/61.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/e5467a2a-291f-4978-8a84-e57344ec9cc7/PK_ANM2025%20abstract.pdf?view=open"
    },

    {
      name: "Wiktoria Weichbrodt",
      institution: "Wroclaw University of Science and Technology",
      country: "Poland",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/62.jpg",
      abstract: "#"
    },

    {
      name: "Georges Mouchaham",
      institution: "IMAP (CNRS-ESPCI-ENS)",
      country: "France",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/63.jpg",
      abstract: "#"
    },

    {
      name: "Yuan-Hsiang Yu",
      institution: "Fu Jen Catholic University",
      country: "Taiwan",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/64.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/8804caf9-6483-4155-a3c9-8e3de3ffcd4b/ANM2025-abstract-Yuan-Hsiang%20Yu.pdf?view=open"
    },

    {
      name: "Lorentz Jäntschi",
      institution: "Technical University of Cluj-Napoca",
      country: "Romania",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/65.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/d6150638-71d5-4695-9374-8c755759d2a6/ANM2025_Jaentschi.pdf?view=open"
    },

    {
      name: "Artur Kasprzak",
      institution: "Faculty of Chemistry, Warsaw University of Technology",
      country: "Poland",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/66.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/72954340-90c2-48b5-abb8-fac6e9750636/KASPRZAK-ANM2025-abstract-template.pdf?view=open"
    },

    {
      name: "Seda Köksal Yeğin",
      institution: "Ion Membranes Company",
      country: "Turkey",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/67.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/9572d837-4552-4e83-9ab6-048f6f383fe8/ANM2025%20Last.pdf?view=open"
    },

    {
      name: "Maria Gimenez Lopez",
      institution: "University of Santiago de Compostela. Oportunius Research Professor. Xunta de Galicia.",
      country: "Spain",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/68.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/a18cae21-b6a2-4314-a469-61ab11f0c91e/ANM2025-abstract-template_Maria_Gimenez.pdf?view=open"
    },
     {
      name: "Courty",
      institution: "Sorbonne Université Laboratoire MONARIS",
      country: "France",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/69.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/6957eda1-d2fe-4281-b936-8ff753064085/ANM2025_ACourty.pdf?view=open"
    },
     {
      name: "Noof Alenazi",
      institution: "Prince Sattam bin Abdulaziz University",
      country: "Saudi Arabia",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/70.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/0a290205-b6a1-44ae-8770-5bbf12104ed5/Abstract%20Chitosan%20Copper-1%20copy.pdf?view=open"
    },
     {
      name: "Natalia Izdebska",
      institution: "Warsaw University of Technology",
      country: "Poland",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/71.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/b229ae24-06e7-4695-b2c0-3c0780a77345/ANM2025-Izdebska-Natalia-abstract.pdf?view=open"
    },
     {
      name: "Timon Günther",
      institution: "University of Augsburg",
      country: "Germany",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/72.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/a39cb43b-b91b-46b7-8b81-66a05bc68b67/ANM2025%20-%20Abstract%20Timon%20G%C3%BCnther.pdf?view=open"
    },
     {
      name: "Jean-Fabien Capsal",
      institution: "aUniv. Lyon, INSA-Lyon, LGEF, EA682, F-69621 Villeurbanne",
      country: "France",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/73.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/f063d2fa-40f9-4bfe-9000-e318b5a8b18b/Abstract_JFC_LGEF_ANM2025(2).docx?view=open"
    },
     {
      name: "Jaroslav Knápek",
      institution: "Czech Technical University in Prague, Faculty of Electrical Engineering",
      country: "Czech Republic",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/74.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/186e4f78-c378-45bb-8610-d6bb3656d5db/Alternative%20Fuel%20Production%20from%20Sewage%20Sludge%20and%20Waste%20Material.pdf?view=open"
    },
     {
      name: "Krzysztof Lukaszkowicz",
      institution: "Silesian University of Technology",
      country: "Poland",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/75.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/186e4f78-c378-45bb-8610-d6bb3656d5db/Alternative%20Fuel%20Production%20from%20Sewage%20Sludge%20and%20Waste%20Material.pdf?view=open"
    },
     {
      name: "Stepan Kment",
      institution: "RCPTM/CATRIN, Palacky University Olomouc",
      country: "Czech Republic",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/76.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/30ce53e3-8fe5-497c-8e2d-b6df130f4f47/abstract%20Kment%20ANM.pdf?view=open"
    },
     {
      name: "Dr Tahir Muhmood",
      institution: "International Iberian Nanotechnology Laboratory (INL),",
      country: "Portugal",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/77.jpg",
      abstract: ""
    },
     {
      name: "Martina Urbanova",
      institution: "Institute of Macromolecular Chemistry, Czech Academy of Sciences",
      country: "Czech Republic",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/78.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/86763520-1aaa-4ef7-9a76-5c90c1833e04/APM2025-Urbanova-poster.pdf?view=open"
    },
     {
      name: "Pedro António Malta Ferreira",
      institution: "IFIMUP, Department of Physics and Astronomy, Faculty of Science, University of Porto",
      country: "Portugal",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/79.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/ea6efb6a-1d1a-46e2-be7d-7e97f202ee1c/Soft-based_resistive-switching_devices_for_artificial_synapses.pdf?view=open"
    },
     {
      name: "William Renan Basso Bassoli",
      institution: "Federal University of Santa Catarina – UFSC",
      country: "Brazil",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/80.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/b4e344a8-3fe0-4c51-a990-15e3ee226450/ANM2022-abstract-Will.pdf?view=open"
    },
     {
      name: "Gabriela Malyszko",
      institution: "Gdansk University of Technology",
      country: "Poland",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/81.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/551c9bd1-0827-4d1f-815a-f9a81432c411/ANM2022-abstract-Gabriela_Malyszko_16_06_2025.docx?view=open"
    },
     {
      name: "SAMBASIVAM SANGARAJU",
      institution: "National Water and Energy Center, United Arab Emirates University",
      country: "United Arab Emirates",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/82.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/5992b2c1-eab9-43b1-9626-d10f0351d826/ANM%202025-%20Sambasivam_UAEU.pdf?view=open"
    },
     {
      name: "Yehoshua Dayan",
      institution: "Mechanical Engineering Faculty, Technion – Israel Institute of Technology",
      country: "Israel",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/83.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/cfa5d455-4e0c-4883-a80e-f2e98f317a46/2CG%20Abstract%20for%20ANC2025%20-%20Dayan%20and%20Elias.pdf?view=open"
    },
     {
      name: "Jiri Brus",
      institution: "Institute of Macromolecular Chemistry CAS",
      country: "Czech Republic",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/84.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/cd0290fb-98ec-45c0-8a7e-5d4f559c37db/APM2025-Brus-oral.pdf?view=open  "
    },
     {
      name: "Ana Paula de Azevedo Marques",
      institution: "Department of Chemistry, Federal University of São Paulo, Diadema Campus, São Paulo",
      country: "Brazil",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/85.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/56e31b64-59a9-4248-91be-0e10717444aa/ANM2025-abstract-APAMarques.pdf?view=open"
    },
     {
      name: "Antonin Minarik",
      institution: "Department of Physics and Materials Engineering, Faculty of Technology, Tomas Bata University in Zlín",
      country: "Czech Republic",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/86.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/25b5ce8c-b41e-49c3-9160-b4db3817137b/ANM2025-abstract-Antonin%20Minarik.doc?view=open"
    },
     {
      name: "Baranek",
      institution: "EDF R&D – IPVF",
      country: "France",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/87.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/a5732836-0ef4-4839-b14c-87bc885f730e/ANM2025-PhBaranek-EDF.pdf?view=open"
    },
     {
      name: "Catarina Lemos",
      institution: "IFIMUP – Institute of Physics for Advanced Materials, Nanotechnology and Photonics",
      country: "Portugal",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/88.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/7485a86c-3ccf-4fde-8d8b-7546873e9381/ANM2025_Catarina_Lemos.pdf?view=open"
    },
     {
      name: "Lukasz Skowronski",
      institution: "Bydgoszcz University of Science and Technology",
      country: "Poland",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/06/89.jpg",
      abstract: "https://t9016861658.p.clickup-attachments.com/t9016861658/9d183dab-c431-423a-ad6e-999f497f24c6/LukaszSkowronski-ANM2024-abstract.pdf?view=open"
    },
     {
      name: "Maxim Sokol",
      institution: "Tel Aviv University",
      country: "Israel",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/95.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/Abstract_ANM2025.pdf"
    },
    {
      name: "Macole Sabat",
      institution: "University of Balamand",
      country: "Lebanon",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/96.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/ANM2025-Abstract-M.-Sabat-1.pdf  "
    },
    {
      name: "Elise S. Watzko",
      institution: "Universidade Federal de Santa Catarina",
      country: "Brazil",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/97.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/ANM2-2025-ESW-2.pdf"
    },
    {
      name: "Peter Njoki",
      institution: "Hampton University",
      country: "United States",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/98.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/Njoki-Omogo-Abstract_ANM2025_3355.pdf"
    },
    {
      name: "Julián Andrés Lenis Rodas",
      institution: "University of Antioquia",
      country: "Colombia",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/99.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/Abstract-J.A.Lenis-ANM2025-1.pdf"
    },
    {
      name: "rachid IDOUHLI",
      institution: "Cadi Ayyad University",
      country: "Morocco",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/100.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/ANM2025-abstract-idouhli-N-211.pdf"
    },
    {
      name: "Federico Vivaldi",
      institution: "Department of Chemistry and Industrial chemistry, University of Pisa",
      country: "Italy",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/101.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/Vivaldi_abstract.pdf"
    },
    {
      name: "Mikołaj Kozak",
      institution: "Jagiellonian University",
      country: "Poland",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/102.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/ANM2025-abstract-M.Kozak_2665.pdf"
    },
    {
      name: "Francisco Javier Ramírez Aguilar",
      institution: "University of Málaga",
      country: "Spain",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/104.jpg",
      abstract: "https://www.jotform.com/uploads/shaondrasonamigos/251732350347049/6266694356611246481/abstract.pdf"
    },
    {
      name: "Jan Meißner",
      institution: "Forschungszentrum Jülich, Institute of Energy Technologies IET-4: Electrochemical Process Engineering",
      country: "Germany",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/103.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/Abstract-122_Meissner.pdf"
    },
    {
      name: "Hana Tarábková",
      institution: "J. Heyrovský Institute of Physical Chemistry of the CAS",
      country: "Czech Republic",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/105.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/ANM2025_Tarabkova.pdf"
    },
    {
      name: "Al-Amin Dhirani",
      institution: "Department of Chemistry, University of Toronto",
      country: "Canada",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/107.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/ANM2025-abstract.docx"
    },
    {
      name: "Ebrahim Sadeghi",
      institution: "Department of Green Technology, University of Southern Denmark",
      country: "Denmark",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/106.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/ANM2022-abstract-template.doc"
    },
    {
      name: "Amadeja Koler",
      institution: "Faculty of Chemistry and Chemical Engineering, University of Maribor",
      country: "Slovenia",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/108.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/ANM2025_Koler.doc"
    },
    {
      name: "Mohamed Nawfal GHAZZAL",
      institution: "Université Paris-Saclay, CNRS UMR 8000, Institut de Chimie Physique, Orsay",
      country: "France",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/109.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/Abstract-ANM-portugal-2-1.pdf"
    },
    {
      name: "Vera La Ferrara",
      institution: "ENEA – Italian National Agency for New Technologies, Energy and Sustainable Economic Development",
      country: "Italy",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/111.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/abstract-ANM25_Vera-La-Ferrara_rev.pdf"
    },
    {
      name: "Paweł Pasierb",
      institution: "AGH University of Krakow",
      country: "Poland",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/112.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/ANM2025-PP.pdf"
    },
    {
      name: "Khadiri Mohyeddine",
      institution: "Cadi Ayyad University, Faculty of Science Semlalia Marrakech",
      country: "Morocco",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/113.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/khadiri.docx"
    },
    {
      name: "Dariusz Zientara",
      institution: "AGH University of Science and Technology, Faculty of Materials Science and Ceramics",
      country: "Poland",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/unnamed-file.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/ANM2022-abstract-template_DZ.pdf"
    },
    {
      name: "Ivana Troppová",
      institution: "VSB-Technical University of Ostrava",
      country: "Czech Republic",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/115.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/ANM2025-abstract_TroppovaIvana.pdf"
    },
    {
      name: "Parisa Ebrahimi",
      institution: "Qatar University",
      country: "Qatar",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/116.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/ANM2025-abstract-Parisa.pdf"
    },
    {
      name: "Oihan Allegret",
      institution: "Xlim research institute UMR CNRS 7252 Université de Limoges, Limoge",
      country: "France",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/117.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/Abstract-ANM_V5.pdf"
    },
    {
      name: "Muhammad Aasim",
      institution: "PhD Candidate IFIMUP University of Porto",
      country: "Portugal",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/167.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/ANM2025-Abstract-1.pdf"
    },
    {
      name: "Matjaž Malok",
      institution: "",
      country: "Slovenia",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/168.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/ANM2025-Malok-Electrical-properties-of-collapsed-MoS2-nanotubes-1.pdf"
    },
    {
      name: "Francisco De Santiago Varela",
      institution: "Instituto de Fisica, UNAM",
      country: "Mexico",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/169.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/anm2025_gecbilayer_FD1-1.pdf"
    },
    {
      name: "František Hájek",
      institution: "Institute of Physics, Czech Academy of Sciences",
      country: "Czech Republic",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/170.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/ANM2025-abstract-Hajek_final.pdf"
    },
    {
      name: "Hana Krýsová",
      institution: "J. Heyrovsky Institute of Physical Chemistry",
      country: "Czech Republic",
      image: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/171.jpg",
      abstract: "https://www.advanced-nanomaterials-conference.com/wp-content/uploads/2025/07/ANM2025-abstract_Krysova.pdf"
    },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(speakers.length / SPEAKERS_PER_PAGE);
  const startIndex = (currentPage - 1) * SPEAKERS_PER_PAGE;
  const endIndex = startIndex + SPEAKERS_PER_PAGE;
  const currentSpeakers = speakers.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
    // Scroll to speakers section
    if (speakersRef.current) {
      const offsetTop = speakersRef.current.offsetTop - 100; // 100px offset for breathing room
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

const nextPage = () => {
  if (currentPage < totalPages) {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    // Scroll after state update
    setTimeout(() => {
      if (speakersRef.current) {
        const offsetTop = speakersRef.current.offsetTop - 100;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }, 0);
  }
};

const prevPage = () => {
  if (currentPage > 1) {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    // Scroll after state update
    setTimeout(() => {
      if (speakersRef.current) {
        const offsetTop = speakersRef.current.offsetTop - 100;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }, 0);
  }
};


  return (
    <div className="bg-gradient-to-br from-[#f7e3ff] via-[#fef3ff] to-[#f0e7ff] min-h-screen text-gray-900 overflow-x-hidden">

      {/* ================= PAGE HEADER ================= */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-md border border-violet-200/50 rounded-full mb-6">
            <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-violet-700">
              Featured Speakers
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-tight mb-6">
            Meet Our <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent font-light">Distinguished</span> Speakers
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-3 justify-center py-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn from world-renowned experts at the forefront of nanomaterials research
          </p>
        </div>
      </section>

      {/* ================= SPEAKERS GRID ================= */}
      <section ref={speakersRef} className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 overflow-hidden">
        
        {/* Section Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-3">
            Speakers 2025
          </h2>
          <p className="text-gray-600 font-light text-sm sm:text-base">
            Leading voices shaping the future of advanced nanomaterials
          </p>
        </div>

        <div className="space-y-12">
          {/* Speakers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {currentSpeakers.map((speaker, index) => (
              <div
                key={startIndex + index}
                className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden hover:shadow-violet-200/50 transition-all duration-500 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Decorative Top Border */}
                <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-8 text-center space-y-4">
                  
                  {/* Name */}
                  <h3 className="text-xl font-medium text-gray-900 group-hover:text-violet-700 transition-colors duration-300">
                    {speaker.name}
                  </h3>

                  {/* Divider */}
                  <div className="flex items-center gap-2 justify-center">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
                    <div className="w-1 h-1 rounded-full bg-violet-400" />
                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
                  </div>

                  {/* Institution Info */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-center gap-2 text-sm text-gray-700 font-light">
                      <svg className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="leading-relaxed">{speaker.institution}</span>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600 font-light">
                      <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{speaker.country}</span>
                    </div>
                  </div>

                  {/* View Abstract Button */}
                  <a href={speaker.abstract} className="group/btn inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-medium tracking-widest uppercase rounded-full hover:shadow-lg hover:shadow-violet-300/50 transition-all duration-300 hover:scale-105">
                    View Abstract
                    <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}

          </div>

          {/* ================= PAGINATION ================= */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
              
              {/* Previous Button */}
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white/90 backdrop-blur-xl border border-violet-100/50 text-violet-600 hover:bg-violet-50 hover:shadow-lg hover:shadow-violet-200/50 hover:-translate-x-1'
                }`}
              >
                <svg className={`w-5 h-5 transition-transform ${currentPage > 1 ? 'group-hover:-translate-x-1' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-medium">Previous</span>
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-10 h-10 rounded-full font-medium transition-all duration-300 ${
                      currentPage === page
                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg scale-110'
                        : 'bg-white/90 backdrop-blur-xl border border-violet-100/50 text-violet-600 hover:bg-violet-50 hover:shadow-lg hover:shadow-violet-200/50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white/90 backdrop-blur-xl border border-violet-100/50 text-violet-600 hover:bg-violet-50 hover:shadow-lg hover:shadow-violet-200/50 hover:translate-x-1'
                }`}
              >
                <span className="font-medium">Next</span>
                <svg className={`w-5 h-5 transition-transform ${currentPage < totalPages ? 'group-hover:translate-x-1' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

          {/* Page Info */}
          {totalPages > 1 && (
            <div className="text-center pt-4">
              <p className="text-sm font-light text-gray-600">
                Showing {startIndex + 1}-{Math.min(endIndex, speakers.length)} of {speakers.length} speakers
              </p>
            </div>
          )}
        </div>

      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 overflow-hidden">
        <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-xl border border-violet-100/50 overflow-hidden">
          
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400" />
          
          <div className="p-8 sm:p-12 text-center space-y-6">
            
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900">
              Interested in Speaking at ANM 2026?
            </h2>

            {/* Divider */}
            <div className="flex items-center gap-3 justify-center py-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            </div>

            <p className="text-base sm:text-lg font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Share your groundbreaking research with the global nanomaterials community. 
              Submit your abstract today!
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              
              <a  href="/abstract-submission"
                className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium tracking-widest uppercase hover:shadow-lg hover:shadow-violet-300/50 transition-all duration-300 rounded-full hover:scale-105"
              >
                Submit Your Abstract
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 text-center mt-auto border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 space-y-4">
          <div className="flex items-center justify-center gap-2 text-sm opacity-90">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
            <span className="font-light tracking-widest">ANM 2026</span>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
          </div>
          <p className="text-xs font-light tracking-wide opacity-60">
            All Rights Reserved
          </p>
        </div>
      </footer>

    </div>
  );
}
