import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss']
})
export class CustomCarouselComponent {
  Blogs = [
    {
      title: 'Blog 1',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dX5LLSN4_FKvP7gS1TRWVgHaEo%26pid%3DApi&f=1&ipt=2fc7690877ed9e1eb2c1be0d8d73854c9f6d646a9896a9eed0e85dbf84aeacf8&ipo=images',
      link: 'https://www.google.com'
    },
    {
      title: 'Blog 2',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q7pRCGAokNXeU6wA8wYbNAHaEK%26pid%3DApi&f=1&ipt=2cc7aafafeb44f171e5e0d0bfcd7a878e92af8259e819ab2af42fe9efb5f2954&ipo=images',
      link: 'https://www.youtube.com'
    },
    {
      title: 'Blog 3',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hRXzI4ttNHyhE0XNEafZuwHaEo%26pid%3DApi&f=1&ipt=8697707fe8f741c97fa035c31dd47567aca07ed5cb3a070790bcba8d6847eaeb&ipo=images',
      link: 'https://www.bing.com'
    },
    {
      title: 'Blog 4',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.g9AwjMw_6gqbIjgenrQ3DAHaEo%26pid%3DApi&f=1&ipt=ad47931a51f86a2f9efd81e23cc9cd76a5b6b6e09d3f7725a5490fde67cc7687&ipo=images',
      link: 'https://www.tiktok.com'
    },
    {
      title: 'Blog 5',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oy8SbD3NP4J7tun01gMjmgHaEK%26pid%3DApi&f=1&ipt=79607ccf7f1e55e3e9dca92262ab7ea54e38db1533d08017b8549e1b5e0c4176&ipo=images',
      link: 'https://www.facebook.com'
    },
    {
      title: 'Blog 6',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.cbpUueJ_onL4_p984kzXFgHaE8%26pid%3DApi&f=1&ipt=995104ef75b472a29505496eac6f8d91f3bb235ab06bdcfb9a7d656a40e5abac&ipo=images',
      link: 'https://www.instagram.com'
    },
    {
      title: 'Blog 7',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.-_bWm7CzUH3rxztcvh1L2gHaEK%26pid%3DApi&f=1&ipt=04bef5343a0672bb400f5d53891fe03c56a016ef163e0fdf056ddb389f57a5a0&ipo=images',
      link: 'https://www.discord.com'
    },
    {
      title: 'Blog 8',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.aEo5k2Lisegugfzxy22wxQHaHC%26pid%3DApi&f=1&ipt=9d7a3ea44f798099b49918bf34b5e67e6c4428352623e54a973005c1a94d4794&ipo=images',
      link: 'https://www.apple.com'
    }
  ];

  addBlog(name: string, image: string, link: string) {
    const newBlog = {
      title: name,
      image: image,
      link: link
    };
    this.Blogs.push(newBlog);
  }

}
