import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background p-6">
        <div className="max-w-4xl mx-auto prose prose-purple">
          <h1 className="text-4xl font-bold text-primary mb-8">Terms and Conditions</h1>
          
          <p className="text-lg mb-6">
            Welcome to Spell Check Game. By accessing and using our website, you accept and agree to be 
            bound by the terms and conditions outlined below.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Use License</h2>
          <p className="text-lg mb-6">
            Permission is granted to temporarily access the materials on Spell Check Game's website for 
            personal, non-commercial use only. This is the grant of a license, not a transfer of title, 
            and under this license you may not modify or copy the materials.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">User Conduct</h2>
          <p className="text-lg mb-6">
            Users agree to use the website and its services in a manner consistent with all applicable 
            laws and regulations. Any use of the website that could harm other users, the website's 
            reputation, or interfere with the website's functioning is strictly prohibited.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Disclaimer</h2>
          <p className="text-lg mb-6">
            The materials on Spell Check Game's website are provided on an 'as is' basis. We make no 
            warranties, expressed or implied, and hereby disclaim and negate all other warranties 
            including, without limitation, implied warranties or conditions of merchantability.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;