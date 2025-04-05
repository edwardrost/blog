import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

// This would typically come from an API or database
const postsFromApi = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  },
  {
    "userId": 1,
    "id": 7,
    "title": "magnam facilis autem",
    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
  },
  {
    "userId": 1,
    "id": 8,
    "title": "dolorem dolore est ipsam",
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
    "userId": 1,
    "id": 9,
    "title": "nesciunt iure omnis dolorem tempora et accusantium",
    "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
  },
  {
    "userId": 1,
    "id": 10,
    "title": "optio molestias id quia eum",
    "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
  },
];

function transformObj(obj) {
  return {
    ...obj,
    date: new Intl.DateTimeFormat('ru-RU').format(new Date(new Date().getTime() - obj.id * 24 * 60 * 60 * 1000)),
    imageUrl: `https://picsum.photos/id/${obj.id + 10}/800/600`,
    body: obj.body.repeat(20),
  };
}

const posts = postsFromApi.map((item) => transformObj(item));

// Generate static params for all posts
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}

export default async function Post({ params }) {
  const { slug } = await params;
  
  // Find the post with the matching ID
  const post = posts.find(p => p.id.toString() === slug);
  
  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        {/* <Header /> */}
        <main className="flex-grow px-4 md:px-16 pt-[180px]">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Post not found</h1>
            <p className="mb-6">The post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  // Find previous and next posts
  const currentIndex = posts.findIndex(p => p.id.toString() === slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <>
      <Header />      
      <article className="flex-grow px-4 md:px-16 pt-6 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Navigation between posts - moved to top */}
          <div className="flex justify-between mb-6">
            {prevPost ? (
              <Button variant="ghost" asChild>
                <Link href={`/${prevPost.id}`}>
                  <span className="text-muted-foreground opacity-75">Previous Post: </span>{prevPost.title.length > 30 ? `${prevPost.title.substring(0, 30)}...` : prevPost.title}
                </Link>
              </Button>
            ) : (
              <div></div>
            )}
            
            {nextPost ? (
              <Button variant="ghost" asChild>
                <Link href={`/${nextPost.id}`}>
                  <span className="text-muted-foreground opacity-75">Next Post: </span>{nextPost.title.length > 30 ? `${nextPost.title.substring(0, 30)}...` : nextPost.title}
                </Link>
              </Button>
            ) : (
              <div></div>
            )}
          </div>
          
          <section className="bg-card rounded-lg overflow-hidden shadow-md">
            <div className="relative h-[400px] w-full">
              <Image 
                src={post.imageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold">{post.title}</h1>                
              </div>
              <time className="text-sm text-muted-foreground">{post.date}</time>
              <div className="prose dark:prose-invert max-w-none">
                <p className="whitespace-normal">{post.body}</p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}