


import Article from "./Article";  // Import Article component

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article 
          key={post.id} 
          title={post.title} 
          date={post.date} 
          preview={post.preview} 
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;
