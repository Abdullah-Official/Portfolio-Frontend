import sanityClient from '@sanity/client'
import imagrUrlBuilder from '@sanity/image-url'


export const client = sanityClient({
    projectId: 'triva9bv',
    dataset: 'production',
    apiVersion: '2022-08-19',
    useCdn: true,
    token: 'skPdSgx0rNFX0xcNJ8lQo0EJ206Q0IQIykCyKLHc0X0c5OkMYWa9WpkBDGB3fGm1RbRxORKP0bCnHOhkNNaekdKrntptA02Vk9WnrGlmww8YJE4K87ISV52E1HmlKKumzlKRe55XiOvwU4RYU0LfTKnCORFk1bcMBloWizDKSr5aN7zJuwHC'
})

const builder = imagrUrlBuilder(client);
export const urlFor = (source) => builder?.image(source)