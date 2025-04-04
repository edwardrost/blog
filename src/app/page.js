import { Suspense } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Filter from "@/components/Filter";
import PostCard from "@/components/PostCard";
import Footer from "@/components/Footer";



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

function transformObj( obj ){
  return {
    ...obj,
    date: new Intl.DateTimeFormat('ru-RU').format(new Date(new Date().getTime() - obj.id * 24 * 60 * 60 * 1000)),
    imageUrl: `https://picsum.photos/id/${obj.id+10}/800/600`,
  };
};

const posts = postsFromApi.map((item) => transformObj(item));

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      
      <main className="flex flex-col justify-between px-16">
        <section className="md:w-full md:flex md:justify-center">
          <div className="prose">        
            <div className="flex flex-col space-y-4 not-prose">
              
              <div className="flex flex-col mt-8 space-y-6">
              <h2 className="text-3xl text-primary dark:text-bright font-bold tracking-tighter text-center sm:text-4xl">
                Latest Blog Posts
              </h2>
              <Filter />
              <Suspense
                fallback={
                  <div className="flex items-center">
                    {/* <BlogCardSkeleton />
                    <BlogCardSkeleton />
                    <BlogCardSkeleton /> */}
                  </div>
                }
              >
                {posts.slice(0, 5).map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
                <div className="flex justify-center">
                  <Link href={"/blog"}>
                    {/* <Button>Read More...</Button> */}
                  </Link>
                </div>
              </Suspense>
            </div>
          </div>
        </div>
      </section>
      </main>      
      <Footer />
    </div>
  );
}
