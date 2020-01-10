import React from "react";
import "./app.css";
import "./about.css";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}));
const tileData = [
  {
    img:
      "https://fineartsbd.com/wp-content/uploads/2019/06/fascinating-bob-hairstyles-for-black-women-6.jpg",
    title: "Image",
    author: "author"
  },
  {
    img:
      "https://cdn.shopify.com/s/files/1/0269/2245/1047/products/f59ecb2b80b7bd2deac75c54e2894510_fb26cd2f-ffba-469e-8815-e65bea2aef49_590x.png?v=1577970671",
    title: "Image",
    author: "author"
  },
  {
    img:
      "https://assets.bigcartel.com/product_images/243414719/__3c+skin++hait10ggg10bbf5222ggfgfgggggfhfggf.jpg?auto=format&fit=max&h=1000&w=1000",
    title: "Image",
    author: "author"
  },
  {
    img:
      "https://4.bp.blogspot.com/-0T9Ji-5V2KU/WdXNxbtMQlI/AAAAAAAAH8g/K-mNxM2ICtg2vzDKqXEOrXK1LNcd6P0BgCLcBGAs/s1600/Nancie%2BMwai%2BNew%2BHair%2B%25283%2529.jpg",
    title: "Image",
    author: "author"
  },
  {
    img:
      "https://www.sensationnel.com/wp-content/uploads/Empire_WigSAP_S_Jean_main-600x800.jpg",
    title: "Image",
    author: "author"
  }
];

function AboutPage() {
  const classes = useStyles();
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        We Rise by lifting others. Our true form is not on gender or DNA of our
        chromosomes but on the freedom.The freedom of mind, voice, and
        expression.Our powers are not in strength, my strength maybe silences
        also.
      </p>

      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {tileData.map((tile, i) => (
            <GridListTile key={i}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title
                }}
                //   actionIcon={
                //     <IconButton aria-label={`star ${tile.title}`}>
                //       <StarBorderIcon className={classes.title} />
                //     </IconButton>
                //   }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

export default AboutPage;
