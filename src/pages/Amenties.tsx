


const amenities = [
{
name: "Fully Furnished Apartments",
image: "/images/amenities/furnished.jpg",
},
{
name: "Swimming Pool",
image: "/images/amenities/pool.jpg",
},
{
name: "Fully Equipped Gym",
image: "/images/amenities/gym.jpg",
},
{
name: "Sauna & Wellness",
image: "/images/amenities/sauna.jpg",
},
{
name: "Basketball Court",
image: "/images/amenities/basketball.jpg",
},
{
name: "High-Speed WiFi & Cleaning",
image: "/images/amenities/wifi.jpg",
},
];


export function Amenities() {
return (
<main className="bg-[var(--color-bg)] text-[var(--color-text)]">
{/* Header */}
<section className="py-24 bg-[var(--color-bg-muted)] text-center">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
Lifestyle & Amenities
</h1>
<p className="mt-4 max-w-2xl mx-auto text-[var(--color-text-muted)]">
Everything you need to support a healthy, balanced, and enjoyable
student lifestyle.
</p>
</section>


{/* Amenities Grid */}
<section className="py-20">
<div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
{amenities.map((item) => (
<div
key={item.name}
className="rounded-2xl overflow-hidden border border-[var(--color-border)] bg-white"
>
<div className="aspect-[4/3] overflow-hidden">
<img
src={item.image}
alt={item.name}
className="w-full h-full object-cover"
/>
</div>
<div className="p-6 text-center">
<h3 className="font-medium">{item.name}</h3>
</div>
</div>
))}
</div>
</section>


{/* CTA */}
<section className="py-24 bg-[var(--color-primary)] text-white text-center">
<h2 className="text-2xl md:text-3xl font-semibold">
Everything You Need to Live Well
</h2>
<p className="mt-3 text-white/80">
Our student hostel apartments are designed to support a healthy, balanced, and enjoyable lifestyle.
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