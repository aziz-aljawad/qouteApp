import { Quote } from "../Data/qoutes.interface";

export class QuotesService {
    private favoriteQuotes: Quote[] = [];
    addQuote(quote: Quote){
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }
    removeQuote(quote: Quote){
        const postion =this.favoriteQuotes.findIndex((quoteEl: Quote) =>{
            return quoteEl.id  == quote.id;
        });
        this.favoriteQuotes.splice(postion,1);
    }
    getFavoriteQuotes(){
        return this.favoriteQuotes.slice();
    }
    isQouteFavorite(quote: Quote){    
        return this.favoriteQuotes.find((quoteEl: Quote)=>{
            return quoteEl.id == quote.id;
        });
    }
}