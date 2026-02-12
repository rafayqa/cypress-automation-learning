import ConfrimationPage from "./ConfirmationPage";
class CartPage {

    checkoutItems() {
       cy.contains('button', 'Checkout').click()
       return new ConfrimationPage();
    }

    sumofProducts() {

        let sum = 0;

        //Verify no any sum of products are execeing the $200,000 price range 
       return cy.get('tr td:nth-child(3) strong').each(($el, index, $list) => {
            const priceText = $el.text();
            //Trim the white spaces and get the price value only
            const extractedPrice = Number(priceText.split(" ")[1].trim());
            sum = sum + extractedPrice;


        }).then(function () {

            return sum;
        })
    }
}

export default CartPage;