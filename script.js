const jobs = [
  {
    id: "oracle-2024",
    yearLabel: "Sep 2024",
    start: "2024-09-01",
    title: "Technical Support Engineer II",
    company: "Oracle",
    years: "Sep 2024 – Present | Remote",
    description: `
      - Support cloud-hosted healthcare systems used by hundreds of hospitals.<br>
      - Troubleshoot front-end and back-end issues, reducing resolution time by 20%.<br>
      - Collaborate with engineering teams on AWS/Azure infrastructure.<br>
      - Create knowledge base articles, improving resolution efficiency by 15%.<br>
      - Enhance incident response tooling, improving reliability by 10%.
    `
  },
  {
    id: "laptop-2024",
    yearLabel: "May 2024",
    start: "2024-05-01",
    title: "Laptop Technician (Contract)",
    company: "IGNW/CDW at Fisher Phillips",
    years: "May 2024 – Sep 2024 | Sandy Springs, GA",
    description: `
      - Migrated 800+ workstations to Windows 11 with near-zero downtime, ensuring compliance with corporate standards.<br>
      - Automated IT deployment processes using Autopilot and PowerShell, reducing onboarding time for new hires by 40%.<br>
      - Partnered with legal and compliance teams to validate security policies during migration, reducing risk exposure.<br>
      - Developed custom scripts to accelerate asset tracking and reporting initiatives, increasing inventory accuracy by 15%.
    `
  },
  {
    id: "mclarens-2023",
    yearLabel: "Jan 2023",
    start: "2023-01-01",
    title: "Technical Support Engineer II",
    company: "McLarens",
    years: "Jan 2023 – May 2024 | Norcross, GA",
    description: `
      - Directed device compliance for 300+ devices via Intune.<br>
      - Reduced unauthorized access incidents by 15%.<br>
      - Diagnosed Windows Server and Azure hybrid issues.<br>
      - Mentored junior engineers, improving efficiency.
    `
  },
  {
    id: "intern-2022",
    yearLabel: "Jun 2022",
    start: "2022-06-01",
    title: "Technical Support Intern",
    company: "McLarens",
    years: "Jun 2022 – Jan 2023 | Norcross, GA",
    description: `
      - Delivered frontline support to 2000+ global employees, achieving a 98% satisfaction score through timely resolutions.<br>
      - Improved system reliability by 30% by diagnosing and fixing recurring issues in Windows OS and productivity applications.<br>
      - Investigated root causes of persistent technical problems and proposed preventive solutions, reducing repeat incidents.<br>
      - Authored troubleshooting documentation and knowledge base articles, enhancing team efficiency and onboarding.<br>
      - Shadowed senior engineers in Intune and cloud identity management, gaining early exposure to MDM and IAM practices.
    `
  }
];

const timeline = document.getElementById("timeline");
const sorted = [...jobs].sort((a, b) => new Date(b.start) - new Date(a.start));

sorted.forEach(job => {
  const item = document.createElement("div");
  item.classList.add("timeline-item");
  item.dataset.jobId = job.id;
  item.innerHTML = `<span>${job.yearLabel}</span>`;
  item.addEventListener("click", () => showJob(job, item));
  timeline.appendChild(item);
});

function showJob(job, element) {
  document.querySelectorAll(".timeline-item").forEach(el => el.classList.remove("active"));
  element.classList.add("active");
  const detailsDiv = document.getElementById("job-details");
  detailsDiv.classList.remove("show");
  setTimeout(() => {
    detailsDiv.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>${job.company}</strong> — ${job.years}</p>
      <p>${job.description}</p>
    `;
    detailsDiv.classList.add("show");
  }, 150);
}

window.addEventListener("DOMContentLoaded", () => {
  const firstItem = document.querySelector(".timeline-item");
  if (firstItem) firstItem.click();
});

document.getElementById("download").addEventListener("click", () => {
  const resume = document.getElementById("resume");
  const btn = document.querySelector(".download-btn");
  btn.style.display = "none";
  const opt = {
    margin: 0.5,
    filename: "Jaylen_Smiley_Resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
  };
  html2pdf().from(resume).set(opt).save().then(() => {
    btn.style.display = "block";
  });
});
