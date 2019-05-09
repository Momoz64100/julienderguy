import { Component } from '@angular/core';
import { IPortfolio, IPortfolioImage, IPortfolioFolder } from './portfolio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {


  ngOnInit() { 
    this.buildPortoflio();
  }

  buildPortoflio()
  {
    var portfolioFolders: IPortfolioFolder[];

    var avantProjetImg: IPortfolioImage[];
    for (let i = 0; i < 16; i++) {
      avantProjetImg.push({
        id: i + 1,
        extension: "jpg"
      })      
    }
    portfolioFolders.push({
      title: "avant-projet",
      images: avantProjetImg
    })    

    // var insertion3d: IPortfolioImage[] = [];
    // for (let i = 0; i < 5; i++) {
    //   insertion3d.push({
    //     id: i + 1,
    //     extension: "jpg"
    //   })      
    // } 
    // portfolioFolders.push({
    //   title: "insertion3d",
    //   images: insertion3d
    // }) 

    
    // var portfolio: IPortfolio = {
    //   folder: portfolioFolders
    // }
    console.log("test");
  }
}
