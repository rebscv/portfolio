import html5Img from "../assets/skills/html5.webp";
import jsImg from "../assets/skills/js.webp";
import css3Img from "../assets/skills/css3.webp";
import wordpressImg from "../assets/skills/wordpress.webp";
import joomlaImg from "../assets/skills/joomla.webp";
import drupalImg from "../assets/skills/drupal.webp";
import photoshopImg from "../assets/skills/photoshop.webp";
import figmaImg from "../assets/skills/figma.webp";
import reactImg from "../assets/skills/react.webp";

const skills = {

  frontend : {
    title : "Primary Techstacks & Tools",
    class : "skills-main",
    items : [
      {
        id          : 1,
        title       : "HTML5",
        description : "my skills",
        image       : html5Img
      },
      {
        id          : 2,
        title       : "CSS3",
        image       : css3Img
      },
      {
        id          : 3,
        title       : "Javascript (es6+)",
        image       : jsImg
      },
      {
        id          : 4,
        title       : "WordPress",
        image       : wordpressImg
      },
      {
        id          : 5,
        title       : "Joomla",
        image       : joomlaImg
      },
      {
        id          : 6,
        title       : "PHP",
        image       : joomlaImg
      },
      {
        id          : 7,
        title       : "Photoshop",
        image       : photoshopImg
      },
      {
        id          : 8,
        title       : "Responsive Design",
        image       : photoshopImg
      },
      {
        id          : 9,
        title       : "CSS Grid / Flexbox",
        image       : photoshopImg
      }
    ]
  },

  inprogress : {
    title : "Professional Development",
    class : "skills-main skills-prof-dev",
    items : [
      {
        id          : 1,
        title       : "React",
        image       : reactImg
      }
    ]

  },

  secondary : {
    title : "CMS & Development",
    class : "skills-seconardy",
    items : [
      {
        id          : 1,
        title       : "Drupal"
      },
      {
        id          : 2,
        title       : "Figma"
      },
      {
        id          : 3,
        title       : "Advanced Custom Fields (ACF)"
      }
    ]
  },

  librariesTools : {
    title : "Libraries & Tools",
    class : "skills-seconardy",
    items : [
      {
        id          : "1"  ,
        title       : "jQuery",
      },
      {
        id          : "2",
        title       : "Embla Carousel",
      },
      {
        id          : "3",
        title       : "React Router",
      },
      {
        id          : "4",
        title       : "React DatePicker",
      },
      {
        id          : "5",
        title       : "Framer Motion",
      }

    ]
  },
  
  designCreative : {
    title : "Design & Creative",
    class : "skills-seconardy",
    items : [
      {
        id          : "1"  ,
        title       : "Illustrator",
      },
      {
        id          : "2",
        title       : "After Effects",
      },
      {
        id          : "3",
        title       : "Premier",
      },
      {
        id          : "4",
        title       : "Animate",
      },
      {
        id          : "5",
        title       : "Final Cut Pro",
      },
      {
        id          : "6",
        title       : "Lightwave 3D",
      }

    ]
  }

};

export default skills;