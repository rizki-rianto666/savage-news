const newsContainer = document.querySelector(".news");
console.log(newsContainer);
const news = [
  {
    image: "21-metro.jpg",
    caption: "21 Savage and Metro Boomin",
    title: "Metro Boomin&rsquo; Admits Working With 21 Savage Can Be Exhausting",
    content: `Metro Boomin&rsquo; reveals that collaborating with 21 Savage can sometimes be &ldquo;draining.&rdquo; 
    In a <i>Rolling Stone</i> interview with Timbaland, Metro discussed his creative process with 21.

    He explained, &ldquo;As I get older, I notice it more. Me and [21] Savage go through that sometimes.&rdquo; 
    When asked by Timbaland how often he requests artists to redo their vocals, Metro shared that 
    21 is incredibly selective with beats. &ldquo;I&rsquo;ll play him 35 or 40 beats before he&rsquo;s ready to record. 
    It&rsquo;s just like you said about Missy&mdash;he&rsquo;s the pickiest artist I&rsquo;ve ever worked with. 
    And it can be exhausting. He&rsquo;ll keep saying, &lsquo;Next one, next one, next one...&rsquo;&rdquo;`,
  },
  {
    image: "21-adin-ross.jpg",
    title: "21 Savage Accused of Scamming Adin Ross for $120K",
    caption: "21 Savage and Adin Ross on Kick Stream",
    content: `21 Savage allegedly attempted to scam Adin Ross out of $120,000 during a dice game 
    on the popular streamer&rsquo;s Kick channel.

    On Friday (February 2), the <i>American Dream</i> rapper was caught using what appeared to be 
    scratched cards after Ross lost a $120,000 bet. The incident quickly went viral, sparking 
    debate among fans and viewers.`,
  },
  {
    image: "21-gbp.jpg",
    title: "21 Savage and Central Cee Join Forces for &lsquo;GBP&rsquo;",
    caption: "21 Savage and Central Cee",
    content: `Kicking off 2025 with a major surprise, UK rap sensation Central Cee has teamed up 
    with 21 Savage for an unexpected collaboration titled &ldquo;GBP.&rdquo; The track drops just days ahead 
    of Cench&rsquo;s highly anticipated debut album, <i>Can&rsquo;t Rush Greatness</i>, set for release on January 24.

    Merging UK and US rap influences, &ldquo;GBP&rdquo; showcases sharp verses from both artists over a 
    hypnotic beat and haunting vocal sample. Central Cee reflects on his rise from humble beginnings 
    to international stardom, while 21 Savage delivers his signature gritty flow, making the song 
    a transatlantic anthem.

    The single is accompanied by a visually striking music video shot in Atlanta and directed 
    by Cole Bennett of <i>Lyrical Lemonade</i>, the mastermind behind Central Cee&rsquo;s viral &ldquo;Doja&rdquo; video.`,
  },
];



newsContainer.innerHTML = news.map((n) => {
    console.log(n)
  return `
<section class="news--item">
                        <figure>
                            <img src="assets/image/${n.image}" alt="${n.title}">
                            <figcaption><i>${n.caption}</i></figcaption>
                        </figure>
                        <div class="news-item--content">
                            <h3><i><a href="#">${n.title}</a></i></h3>
                            <p>
                            ${n.content}
                            </p>
                        </div>
                    </section>
`;
});


// Menu nav
const buttonNav = document.querySelector(".menu-nav");
const menuNav = document.querySelector(".menu-nav ul");
buttonNav.addEventListener("click", () => {
    if(buttonNav.classList.contains("active")) {
        buttonNav.classList.remove("active");
        menuNav.classList.remove('dropped')
    }else{
        buttonNav.classList.add("active");
        menuNav.classList.add('dropped');
    }
})
