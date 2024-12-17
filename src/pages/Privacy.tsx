import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background p-6">
        <div className="max-w-4xl mx-auto prose prose-purple">
          <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
          
          <p className="text-lg mb-6">
            At Spell Check Game, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, and protect your personal information when you use our website and services.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Advertising Networks</h2>
          <p className="text-lg mb-6">
            We use various advertising networks including Google AdSense and other third-party advertising 
            companies to serve ads when you visit our website. These companies may use information about your 
            visits to this and other websites to provide advertisements about goods and services of interest to you.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Information We Collect</h2>
          <p className="text-lg mb-6">
            We collect information that you provide directly to us, including when you create an account, 
            use our services, or contact us for support. This may include your name, email address, and 
            usage data related to your interactions with our spelling games and exercises.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-lg mb-6">
            We use the information we collect to provide, maintain, and improve our services, to communicate 
            with you, and to personalize your learning experience. We may also use the information to send 
            you updates about new features or educational content.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Data Security</h2>
          <p className="text-lg mb-6">
            We implement appropriate technical and organizational measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;