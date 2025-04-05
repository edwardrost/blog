export default function Footer() {
  return (
    <footer className="bg-background py-4">
      <div className="max-w-4xl mx-auto px-4 md:px-16">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
};