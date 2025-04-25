


function Article({ title, date = "January 1, 1970", preview, minutes }) {
    // Function to generate emojis based on reading time
    const readTime = () => {
      let emojis = "";
      if (minutes < 30) {
        for (let i = 0; i < Math.ceil(minutes / 5); i++) {
          emojis += "☕️";
        }
        return `${emojis} ${minutes} min read`;
      } else {
        for (let i = 0; i < Math.ceil(minutes / 10); i++) {
          emojis += "🍱";
        }
        return `${emojis} ${minutes} min read`;
      }
    };
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <p>{readTime()}</p>
      </article>
    );
  }
  
  export default Article;
  
