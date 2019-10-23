const vm = new Vue({
    el: '#app',
    data: {
        games: [],
        categories: [],
        genres: [],
        base_url: 'http://127.0.0.1:5501/',
        discount: true
    },

    methods: {
        fetchGames() {
            fetch(`${this.base_url}/api/games.json`)
                .then(response => response.json())
                .then(response => this.games = response)
                .catch(error => console.error(error))
        },

        fetchCategories() {
            fetch(`${this.base_url}/api/categories.json`)
                .then(response => response.json())
                .then(response => this.categories = response)
                .catch(error => console.error(error))
        },
        fetchGenres() {
            fetch(`${this.base_url}/api/genres.json`)
                .then(response => response.json())
                .then(response => this.genres = response)
                .catch(error => console.error(error))
        },
        getDiscountedPrice(price, discountPercentage) {
            console.log('Price:', price)
            console.log('Discount:', discountPercentage)
            const discount = price * discountPercentage / 100;
            return price - discount;
        }

    },
    filters: {
        currency(value) {
            return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        }
    },
    created() {
        console.log('Rodando')
        this.fetchGames();
        this.fetchCategories();
        this.fetchGenres();
    }

})