const About = () => {
    const {username} = userParam();
  return (
    <div>
      <h1>About Page</h1>
      <p>Hello, {username}. This About page is for you!</p>
    </div>
  );
};

export default About;
