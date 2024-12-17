import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background p-6">
        <div className="max-w-4xl mx-auto prose prose-purple">
          <h1 className="text-4xl font-bold text-primary mb-8">About Spell Check Game</h1>
          
          <p className="text-lg mb-6">
            Welcome to Spell Check Game, your trusted companion in the journey towards spelling mastery! 
            Established with a passion for education and a commitment to making learning enjoyable, 
            our platform has become a go-to resource for students, teachers, and language enthusiasts alike.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Mission</h2>
          <p className="text-lg mb-6">
            At Spell Check Game, our mission is to transform the way people learn and improve their spelling skills. 
            We believe that learning should be engaging, interactive, and accessible to everyone. Through our 
            carefully designed games and exercises, we make the journey of mastering spelling an enjoyable adventure 
            rather than a daunting task.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">What Sets Us Apart</h2>
          <p className="text-lg mb-6">
            Our unique approach combines proven educational methodologies with modern technology to create an 
            immersive learning experience. We understand that every learner is different, which is why our 
            platform offers multiple difficulty levels and learning paths to suit individual needs and 
            learning styles.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Commitment</h2>
          <p className="text-lg mb-6">
            We are committed to continuously improving and expanding our platform based on user feedback and 
            educational research. Our team of educators, developers, and language experts works tirelessly 
            to ensure that Spell Check Game remains at the forefront of educational technology while 
            maintaining its user-friendly approach.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;