<template>
  <div v-if="product">
    <p class="text-orange-600">{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p>
  </div>
</template>

<!-- <script setup lang="ts">
  const id = useRoute().params.id as string;
</script> -->

<script setup lang="ts">
  // Define the Product interface based on the API structure
  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }

  // Access the route and extract the id parameter
  const route = useRoute();
  const id = route.params.id as string;
  const uri = `https://fakestoreapi.com/products/${id}`

  // Fetch the product data, providing the Product type for type safety
    // `data` = property in `useFetch` (containing the data – also has `status`, `pending` (?) etc)
    // `{ key: id }` : `useFetch` minimzes fetch requests and uses last used key (id) by default, so we need to specify the unique key (in an 'options object' as a second parameter) for products not to be identical (selvom det også virker uden, men ikke for net ninja – opdatering..?)
  const { data: product } = await useFetch<Product>( uri, { key: id } );

  // Set the page layout using definePageMeta
  definePageMeta({
    layout: "netninja-products",
  });
</script>