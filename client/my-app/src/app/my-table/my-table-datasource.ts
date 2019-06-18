import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {freeApiService} from 'src/services/freeapi.service';
import {Product} from '../classes/product'



// TODO: replace this with real data from your application
const EXAMPLE_DATA: Product[] = [ // 10 example data products taken from the server db json 
  {
    "id": "774944",
    "general": {
      "presentable_id": "774944",
      "name": "Blekk BROTHER LC1280XLC blå",
      "description": "<p><b>Få optimale utskriftsresultater, tydelig tekst og levende grafikk med Brother LC1280XLC-blekkpatronen i cyan.</b></p><p>Denne Brother LC1280XLC-blekkpatronen i cyan med stor kapasitet produserer levende, stilige resultater i utskrifter av høy kvalitet. Blekket er laget for optimal bruk med ulike Brother-maskiner og har flekkbestandig blekk som ikke falmer, for svært holdbare utskrifter. Denne blekkpatronen i cyan har en kapasitet på opptil 1200 sider.</p><li>Farge: Cyan</li><li>Kapasitet: Opptil 1200 A4-sider </li><li>Enkel å installere og skifte ut</li><li>Flekkbestandig og falmer ikke</li><li>Gir tekst og bilder med utmerket kvalitet</li><li>Se kompatibilitetsoversikten for passende maskiner</li>"
    },
    "brand": {
      "name": "Brother Norge AS"
    },
    "images": {
      "primary": {
        "large": "https://i.imgur.com/zYcibjw.jpg"
      }
    }
  },
  {
    "id": "774945",
    "general": {
      "presentable_id": "774945",
      "name": "Blekk BROTHER LC1280XLM rød",
      "description": "<p><b>Få optimale utskriftsresultater, tydelig tekst og levende grafikk med Brother LC1280XLM-blekkpatronen i magenta.</b></p><p>Denne Brother LC1280XLM-blekkpatronen i magenta med stor kapasitet produserer levende, stilige resultater i utskrifter av høy kvalitet. Blekket er laget for optimal bruk med ulike Brother-maskiner og har flekkbestandig blekk som ikke falmer, for svært holdbare utskrifter. Denne blekkpatronen i magenta har en kapasitet på opptil 1200 sider.</p><li>Farge: Magenta</li><li>Kapasitet: Opptil 1200 A4-sider </li><li>Enkel å installere og skifte ut</li><li>Flekkbestandig og falmer ikke</li><li>Gir tekst og bilder med utmerket kvalitet</li><li>Se kompatibilitetsoversikten for passende maskiner</li>"
    },
    "brand": {
      "name": "Brother Norge AS"
    },
    "images": {
      "primary": {
        "large": "https://i.imgur.com/ucfnti1.jpg"
      }
    }
  },
  {
    "id": "774946",
    "general": {
      "presentable_id": "774946",
      "name": "Blekk BROTHER LC1280XLY gul",
      "description": "<p><b>Få optimale utskriftsresultater, tydelig tekst og levende grafikk med den gule Brother LC1280XLY-blekkpatronen.</b></p><p>Denne gule Brother LC1280XLY-blekkpatronen med stor kapasitet produserer levende, stilige resultater i utskrifter av høy kvalitet. Blekket er laget for optimal bruk med ulike Brother-maskiner og har flekkbestandig blekk som ikke falmer, for svært holdbare utskrifter. Denne gule blekkpatronen har en kapasitet på opptil 1200 sider.</p><li>Farge: Gul</li><li>Kapasitet: Opptil 1200 A4-sider </li><li>Enkel å installere og skifte ut</li><li>Flekkbestandig og falmer ikke</li><li>Gir tekst og bilder med utmerket kvalitet</li><li>Se kompatibilitetsoversikten for passende maskiner</li>"
    },
    "brand": {
      "name": "Brother Norge AS"
    },
    "images": {
      "primary": {
        "large": "https://i.imgur.com/6zdrajU.jpg"
      }
    }
  },
  {
    "id": "123581",
    "general": {
      "presentable_id": "123581",
      "name": "Blekk BROTHER HCBK 30K sort",
      "description": "<p>Sort høykapasitets blekkpatron for opp til 30 000 sider til Brother HLS7000DN</p>"
    },
    "brand": {
      "name": "Brother Norge AS"
    },
    "images": {
      "primary": {
        "large": "https://i.imgur.com/y281knV.jpg"
      }
    }
  },
  {
    "id": "782691",
    "general": {
      "presentable_id": "782691",
      "name": "Blekk BROTHER LC1000 Value Pack",
      "description": "<p><b>Denne lønnsomme pakken med originale Brother LC 1000-blekkpatroner i svart og tre farger gir svært gode utskriftsresultater.</b></p><p>Blekket er laget for optimal bruk med Brother-skrivere og gir holdbare utskrifter med fargeekte blekk som ikke etterlater flekker.</p><li>Anslått kapasitet er 500 sider i svart og 400 sider i farger ved 5% dekning</li><li>Brukes med Brother DCP 353C, 540CN, 560CN, 750CW: MFC 5460CN og 5860CN.</li>"
    },
    "brand": {
      "name": "Brother Norge AS"
    },
    "images": {
      "primary": {
        "large": "https://i.imgur.com/VYFK7wj.jpg"
      }
    }
  },
  {
    "id": "782485",
    "general": {
      "presentable_id": "782485",
      "name": "Blekk BROTHER LC1000BK sort",
      "description": "<p><b>Produser utskrifter av høy kvalitet økonomisk med originale svarte Brother-blekkpatroner.</b></p><p>Brother-blekkpatroner er utviklet og laget spesielt under strenge forhold, noe som sikrer utskrifter og ytelse av høy kvalitet. Reduser kostnader og avfall med individuelle blekkpatroner, og skift bare ut fargen du trenger. Hvis du vil ha optimale resultater, bruker du Brothers blekkpatroner med Brothers skrivere.</p><li>Farge: Svart </li><li>Kapasitet: opptil 500 A4-sider</li><li>Høy kvalitet og ytelse</li><li>Mye for pengene</li><li>Skift ut bare nødvendige patroner</li><li>Kompatibel med: Brother DCP-130C, 330C, 350C, 353C, 540CN, med flere</li>"
    },
    "brand": {
      "name": "Brother Norge AS"
    },
    "images": {
      "primary": {
        "large": "https://i.imgur.com/Lg9FApl.jpg"
      }
    }
  },
  {
    "id": "782486",
    "general": {
      "presentable_id": "782486",
      "name": "Blekk BROTHER LC1000C blå",
      "description": "<p><b>Generer fyldige, levende fargeutskrifter med denne allsidige og pålitelige, cyanfargede Brother-blekkpatronen.</b></p><p>Forbedre rapporter, brosjyrer og andre dokumenter med denne livlige, cyanfargede Brother-blekkpatronen. Det fargeekte Innobella-blekket i enheten er falme- og ozonbestandig, noe som gjør denne patronen ideell for daglig bruk på jobb. Denne cyanfargede Brother-blekkpatronen er utformet for enkel og intuitiv installering, og fungerer med en rekke Brother DCP-skrivere.</p><li>Produser opptil 400 A4-sider i farger</li><li>Den er enkel å installere og kan brukes umiddelbart</li><li>Lag fargerike rapporter og levende markedsføringsmateriell</li><li>Originalt Brother Innobella-blekk for holdbare resultater</li><li>Kompatibel med ulike Brother DCP inkjet-skrivere</li>"
    },
    "brand": {
      "name": "Brother Norge AS"
    },
    "images": {
      "primary": {
        "large": "https://i.imgur.com/NIqFeAE.jpg"
      }
    }
  },
  {
    "id": "782487",
    "general": {
      "presentable_id": "782487",
      "name": "Blekk BROTHER LC1000M rød",
      "description": "<p><b>Få fyldige, levende fargeutskrifter med denne allsidige og pålitelige, magentafargede Brother-blekkpatronen.</b></p><p>Forbedre rapporter, brosjyrer og andre dokumenter med denne livlige, magentafargede Brother-blekkpatronen. Det fargeekte Innobella-blekket i enheten er falme- og ozonbestandig, noe som gjør denne patronen ideell for daglig bruk på jobb. Denne cyanfargede Brother-blekkpatronen er utformet for enkel og intuitiv installering, og fungerer med en rekke Brother DCP-skrivere.</p><li>Produser opptil 400 A4-sider i farger</li><li>Den er enkel å installere og kan brukes umiddelbart</li><li>Lag fargerike rapporter og levende markedsføringsmateriell</li><li>Originalt Brother Innobella-blekk for holdbare resultater</li><li>Kompatibel med ulike Brother DCP inkjet-skrivere</li>"
    },
    "brand": {
      "name": "Brother Norge AS"
    },
    "images": {
      "primary": {
        "large": "https://i.imgur.com/IzFfgMP.jpg"
      }
    }
  },
  {
    "id": "782488",
    "general": {
      "presentable_id": "782488",
      "name": "Blekk BROTHER LC1000Y gul",
      "description": "<p><b>Få fyldige, levende fargeutskrifter med denne allsidige og pålitelige, gule Brother-blekkpatronen.</b></p><p>Forbedre rapporter, brosjyrer og andre dokumenter med denne livlige, gule Brother-blekkpatronen. Det fargeekte Innobella-blekket i enheten er falme- og ozonbestandig, noe som gjør denne patronen ideell for daglig bruk på jobb. Denne cyanfargede Brother-blekkpatronen er utformet for enkel og intuitiv installering, og fungerer med en rekke Brother DCP-skrivere.</p><li>Produser opptil 400 A4-sider i farger</li><li>Den er enkel å installere og kan brukes umiddelbart</li><li>Lag fargerike rapporter og levende markedsføringsmateriell</li><li>Originalt Brother Innobella-blekk for holdbare resultater</li><li>Kompatibel med ulike Brother DCP inkjet-skrivere</li>"
    },
    "brand": {
      "name": "Brother Norge AS"
    },
    "images": {
      "primary": {
        "large": "https://i.imgur.com/c9YFlUZ.jpg"
      }
    }
  },
  {
    "id": "738471",
    "general": {
      "presentable_id": "738471",
      "name": "Blekk BROTHER LC1100 Value sort+CMY (4)",
      "description": "<p><b>Denne lønnsomme pakken med originale Brother LC1100-blekkpatroner i svart og tre farger gir svært gode utskriftsresultater.</b></p><p>Blekket er laget for optimal bruk med Brother-skrivere og gir holdbare utskrifter med fargeekte blekk som ikke etterlater flekker.</p><li>Anslått kapasitet er 450 sider i svart og 325 sider i farger ved 5% dekning</li><li>Brukes med Brother DCP 185C, 385C, 585CW, 6690CW: MFC 490CW, 5490CN, 5890CN, 6490CW og 990cw.</li>"
    },
    "brand": {
      "name": "Brother Norge AS"
    },
    "images": {
      "primary": {
        "large": "https://i.imgur.com/OIzWduQ.jpg"
      }
    }
  },
  
];

/**
 * Data source for the MyTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MyTableDataSource extends DataSource<Product> {

  constructor(private _freeApiService: freeApiService) {
    super();
  }
  data: Product[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;



  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */

  
  connect(): Observable<Product[]> 
  {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    
    //this.data = EXAMPLE_DATA;
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Product[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Product[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.general.name, b.general.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
