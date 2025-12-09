interface CTASectionProps {
  onCustomRequest: () => void;
}

const CTASection = ({ onCustomRequest }: CTASectionProps) => {
  return (
    <section className="py-16 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">
          Can't find what you're looking for?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Tell us your preferred location, budget, and requirements — we'll match you 
          with available properties within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onCustomRequest}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-medium"
          >
            Submit Custom Request
          </button>
          <button className="px-8 py-3 border border-border rounded-md hover:bg-secondary transition-colors font-medium">
            Browse All Locations
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
