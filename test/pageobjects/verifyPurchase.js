


class verifyPurchase {
    get orderNumber() {
        return ('a[class="order-number"] strong')
    }


    async verify() {
        await this.orderNumber.getValue();

    }
    open() {
        return super.open('verify');
    }
}

module.exports = new verifyPurchase();