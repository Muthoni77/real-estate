

const apartmentLocations = [
{
name: "Al Barsha Heights (Tecom)",
image: "/images/apartments/barsha.jpg",
description:
"Spacious one-bedroom apartment with balcony, fully equipped kitchen, and two washrooms. Ideal for up to 4 students.",
},
{
name: "Dubai Marina",
image: "/images/apartments/marina.jpg",
description:
"Modern interiors, high-speed WiFi, and premium facilities in one of Dubai’s most vibrant areas.",
},
{
name: "JLT (Jumeirah Lake Towers)",
image: "/images/apartments/jlt.jpg",
description:
"Bright, fully furnished apartments near metro stations and universities.",
},
{
name: "Mall of the Emirates",
image: "/images/apartments/moe.jpg",
description:
"Comfort, security, and convenience combined for student living.",
},
{
name: "Ibn Battuta",
image: "/images/apartments/ibn.jpg",
description:
"Fully furnished apartments designed for focused and peaceful student life.",
},
{
name: "Academic City",
image: "/images/apartments/academic.jpg",
description:
"Close to major universities with flexible sharing options and modern design.",
},
];


export function Apartments() {
return (
<main className="bg-[var(--color-bg)] text-[var(--color-text)]">
{/* Header */}
<section className="py-24 bg-[var(--color-bg-muted)] text-center">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
Explore Our Student Hostel Apartments
</h1>
<p className="mt-4 max-w-2xl mx-auto text-[var(--color-text-muted)]">
Fully furnished, secure one-bedroom apartments across Dubai — designed
exclusively for students.
</p>
</section>


{/* Apartments Grid */}
<section className="py-20">
<div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
{apartmentLocations.map((apt) => (
<div
key={apt.name}
className="rounded-2xl overflow-hidden border border-[var(--color-border)] bg-white"
>
<div className="aspect-[4/3] overflow-hidden">
<img
src={apt.image}
alt={apt.name}
className="w-full h-full object-cover"
/>
</div>
<div className="p-6">
<h3 className="font-medium text-lg">{apt.name}</h3>
<p className="mt-2 text-sm text-[var(--color-text-muted)]">
{apt.description}
</p>
</div>
</div>
))}
</div>
</section>


{/* CTA */}
<section className="py-24 bg-[var(--color-primary)] text-white text-center">
<h2 className="text-2xl md:text-3xl font-semibold">
Find the Right Apartment Near Your Campus
</h2>
<p className="mt-3 text-white/80">
Request a hostel and we’ll assign the most convenient option for you.
</p>
<a
href="/request"
className="inline-block mt-8 px-6 py-3 rounded-xl bg-white text-[var(--color-primary)] font-medium hover:opacity-90 transition"
>
Request a Hostel
</a>
</section>
</main>
);
}