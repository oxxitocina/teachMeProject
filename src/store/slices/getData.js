import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getQuestions } from '../../shared/api/api';

export const fetchDataByTopic = createAsyncThunk(
    "data/fetchByTopic",
    async function (topic) {
      const response = await getQuestions(topic)
      console.log(response)
      return response;
    }
  );

export const getDataSlice = createSlice({
  name: 'getData',
  initialState: {
    loading: 'idle',
    data: {
        content: "1. What is the average size of an adult white shark?\na) 6-8 feet\nb) 10-12 feet\nc) 15-18 feet\nd) 20-23 feet\n\nCorrect answer: c) 15-18 feet\n\n2. How many rows of teeth does a white shark have?\na) 30 rows\nb) 50 rows\nc) 70 rows\nd) 90 rows\n\nCorrect answer: b) 50 rows\n\n3. What is the scientific name for white sharks?\na) Carcharodon carcharias\nb) Squalus acanthias\nc) Megalodon megalodon\nd) Lamniformes lamniformes\n\nCorrect answer: a) Carcharodon carcharias\n\n4. What is the primary diet of white sharks?\na) Fish\nb) Seals and sea lions\nc) Squid\nd) Plankton\n\nCorrect answer: b) Seals and sea lions\n\n5. How fast can a white shark swim?\na) 10-15 mph\nb) 20-25 mph\nc) 30-35 mph\nd) 40-45 mph\n\nCorrect answer: c) 30-35 mph\n\n6. How long can a white shark live?\na) 20-30 years\nb) 30-40 years\nc) 40-50 years\nd) 50-60 years\n\nCorrect answer: d) 50-60 years\n\n7. What is the largest recorded white shark ever measured?\na) 18 feet\nb) 20 feet\nc) 25 feet\nd) 30 feet\n\nCorrect answer: c) 25 feet\n\n8. How many senses do white sharks possess?\na) 4\nb) 5\nc) 6\nd) 7\n\nCorrect answer: c) 6\n\n9. What is the conservation status of white sharks?\na) Endangered\nb) Threatened\nc) Near Threatened\nd) Least Concern\n\nCorrect answer: a) Endangered\n\n10. How many white shark attacks on humans occur annually, on average?\na) 5-10\nb) 10-20\nc) 20-30\nd) 30-40\n\nCorrect answer: b) 10-20",
        
        info: "1. The Mighty Predators of the Ocean:::\nWhite sharks, also known as great white sharks, are one of the most fascinating and feared creatures inhabiting our vast oceans. With their powerful bodies and sharp teeth, these apex predators dominate the marine ecosystem, inspiring awe and curiosity among both scientists and the public.\n\n2. The Formidable Anatomy of White Sharks:::\nWhite sharks possess a distinctive appearance characterized by their torpedo-shaped bodies and a large, crescent-shaped tail fin. They can grow up to an impressive length of 20 feet and weigh over 5,000 pounds, making them one of the largest predatory fish in the world. Their sleek skin is covered in unique, rough scales called dermal denticles, which reduce drag and enhance their swimming speed.\n\n3. Masters of the Hunt:::\nThese mighty hunters are equipped with an array of physical adaptations that enable them to excel at their predatory lifestyle. Their most striking feature is, without a doubt, their rows of razor-sharp teeth. White sharks have around 300 teeth arranged in several rows, and as the front ones wear down or break, they are rapidly replaced by new ones from behind. This constant cycle ensures they always have a formidable set of weapons at their disposal.\n\n4. A Balanced Diet for Survival:::\nWhile white sharks have a reputation as relentless hunters, their diet is more diverse than commonly believed. They mainly feed on marine mammals such as seals and sea lions, but they also consume fish, squid, and even other sharks. Their diet varies depending on their location and the availability of prey, and they are skilled at adapting their hunting techniques accordingly. Although they are known as fearsome predators, humans are not a preferred prey for white sharks, as they often mistake us for seals due to our similar silhouette in the water.\n\n5. Migration and Breeding Patterns:::\nWhite sharks are highly migratory creatures, with distinct patterns observed around the world. They follow prey migrations, warmer waters, or even specific breeding grounds. For example, in the eastern Pacific Ocean, white sharks migrate annually from California to a remote region near the Hawaiian Islands known as the White Shark Café. Despite its name, this area is not a feeding ground but rather a mysterious location where the sharks engage in mating and other behaviors yet to be fully understood by scientists.\n\nIn conclusion, white sharks are magnificent creatures that continue to captivate our imagination. Their powerful anatomy, hunting prowess, and migratory patterns make them a subject of ongoing research and conservation efforts. As we strive to understand and protect these apex predators, we unlock invaluable insights into the delicate balance of our marine ecosystems."
    }
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataByTopic.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(
        fetchDataByTopic.fulfilled,
        (state, action) => {
          (state.loading = "idle"), (state.data = action.payload);
        }
      );
  },
})

// export const {  } = counterSlice.actions

export default getDataSlice.reducer