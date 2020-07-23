import React from "react"
import axios from 'axios';
import {ToastsContainer, ToastsStore} from 'react-toasts';
import AddButton from "../addButton"
import SubmitButton from "../submitButton"
import {IngWrapper} from "../Styles"


const IngInput = ({ingList, setIng, setDisplayResults, setPageNum, setKeyWord}) => {

    const IngAdd = () => {
        const box = document.getElementById("newIng");
        if(box.value.trim())
        {
        ingList.push(box.value.trim())  
        ingList = [...new Set(ingList)]
        setIng(ingList)
        ToastsStore.success("Ingredient Added")
    }
    else{ToastsStore.error("No Valid Ingredient to add")}
        box.value = null
    }
    const apiCall = async() => {
        
        if(document.getElementById("keyWord").value)
        {
            setPageNum(1)
            const KW = document.getElementById("keyWord").value;
            const URL = encodeURI(`http://www.recipepuppy.com/api/?i=${ingList.join(',')}&q=${KW}&p=1`)
            ToastsStore.success("Gathering Recipes")
            {/*const results = await axios.get(URL);*/}
            const results = {"title":"Recipe Puppy","version":0.1,"href":"http:\/\/www.recipepuppy.com\/","results":[{"title":"\nBanana Split Dessert Recipe\n\n","href":"http:\/\/cookeatshare.com\/recipes\/banana-split-dessert-11057","ingredients":"graham cracker, banana, ice cream, walnut, fudge topping, whipped topping","thumbnail":"http:\/\/img.recipepuppy.com\/872573.jpg"},{"title":"Banana Split Shake","href":"http:\/\/www.recipezaar.com\/Banana-Split-Shake-107953","ingredients":"banana, chocolate syrup, pineapple, ice cream, maraschino cherries, milk","thumbnail":""},{"title":"Banana Split Oat Bran Pancakes","href":"http:\/\/allrecipes.com\/Recipe\/Banana-Split-Oat-Bran-Pancakes\/Detail.aspx","ingredients":"baking powder, banana, nonstick cooking spray, eggs, milk, oat bran, flour, salt, ice cream, strawberries, sugar","thumbnail":"http:\/\/img.recipepuppy.com\/21574.jpg"},{"title":"\nBanana Split Squares Recipe\n\n","href":"http:\/\/cookeatshare.com\/recipes\/banana-split-squares-77719","ingredients":"banana, nuts, ice cream","thumbnail":""},{"title":"\nBanana Split Moon Pie Recipe\n\n","href":"http:\/\/cookeatshare.com\/recipes\/banana-split-moon-pie-77699","ingredients":"banana, banana, chocolate syrup, ice cream","thumbnail":""},{"title":"Banana Split Cake","href":"http:\/\/www.recipezaar.com\/Banana-Split-Cake-253618","ingredients":"banana, heavy cream, hot fudge, ice cream, maraschino cherries, strawberries, walnut","thumbnail":""},{"title":"Banana Split Pie Recipe","href":"http:\/\/www.grouprecipes.com\/61061\/banana-split-pie.html","ingredients":"banana, whipped topping, ice cream, fudge sauce, dulce de leche, vanilla ice cream, cookie","thumbnail":""},{"title":"Baked Banana Split","href":"http:\/\/www.recipezaar.com\/Baked-Banana-Split-173405","ingredients":"banana, ice cream, chocolate, walnut","thumbnail":""},{"title":"Banana Split Squares Recipe","href":"http:\/\/www.cdkitchen.com\/recipes\/recs\/34\/Banana_Split_Squares15396.shtml","ingredients":"banana, chocolate ice cream, ice cream, nuts","thumbnail":""},{"title":"Banana Split Breakfast","href":"http:\/\/www.cooks.com\/rec\/view\/0,165,153178-238202,00.html","ingredients":"banana, ice cream, nuts, rice krispies","thumbnail":""}]}
            setDisplayResults(results)
            setKeyWord(KW)
        }
        else {ToastsStore.error("Not a valid Keyword")
        
        }
    }
return ( <IngWrapper>
        
<div>Ingredient to Add</div>
<div><input id = "newIng" type = "text"></input>&nbsp;
<AddButton onClick= {IngAdd}/>
</div>
<br/>
<div>Food Keyword</div>
<div><input id = "keyWord" type = "text"></input> &nbsp;
<SubmitButton onClick={apiCall}/>
</div>
<br/>
<ToastsContainer store={ToastsStore}/>
</IngWrapper>)
}

export default IngInput