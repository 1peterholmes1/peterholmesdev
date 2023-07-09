<script lang="ts">
  let items = [
    {
      company: "Beck Enterprises",
      location: "St Paul, MN",
      date: "May 2023 - Present",
      title: "Software Engineer",
      bulletPoints: [
        "Worked with VueJS to rebuild a brand new update to company data portal",
        "Operated with minimal oversight, resourcefully and self-sufficiently",
      ],
    },
    {
      company: "EY US",
      location: "Los Angeles, CA",
      date: "June 2022 - August 2022",
      title: "Cybersecurity Consulting Intern",
      bulletPoints: [
        "Identified effective remediation strategies to rectify cloud security misconfigurations and enhance overall security posture",
        "Actively participated in client meetings and presentations, effectively communicating complex security concepts and recommendations in a clear and concise manner",
      ],
    },
    {
      company: "USC Iovine and Young Academy",
      location: "Los Angeles, CA",
      date: "October 2021 - May 2023",
      title: "IT Specialist",
      bulletPoints: [
        "Managed, troubleshot A/V equipment for classes and Zoom meetings each week",
        "Maintained and demonstrated motion capture system for student projects",
      ],
    },
    {
      company: "Beck Enterprises",
      location: "St Paul, MN",
      date: "June 2019 - August 2019",
      title: "Engineering Internship",
      bulletPoints: [
        "Contributed to R&D of laser measurement devices of retro-reflective road markings",
        "Designed and built laser prototype that reduces task time by 50%",
      ],
    },
  ];
</script>

<div
  class="bg-white/10 backdrop-blur rounded-lg flex flex-col justify-start divide-y px-4"
>
  {#each items as item}
    <div class="py-4">
      <div class="flex justify-between text-left flex-col sm:flex-row">
        <span
          ><span class="font-bold">{item.company}</span>, {item.location}</span
        ><span>{item.date}</span>
      </div>
      <div class="italic text-left">{item.title}</div>
      <ul class="text-left pl-8 list-disc">
        {#each item.bulletPoints as bullet}<li>{bullet}</li>{/each}
      </ul>
    </div>
  {/each}
</div>
