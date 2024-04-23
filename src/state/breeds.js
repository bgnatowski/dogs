import {ref} from "vue";
import {getBreeds} from "@/data.js";

const breeds = ref([])

// breeds.value = await getBreeds()
getBreeds().then(resolve => breeds.value = resolve)


export default breeds