import { Category, TechTag } from '@/enums'
import { Project } from '@/interfaces'

export const YapstoneDevPortal: Project = {
  slug: 'yapstone-devportal',
  title: 'Yapstone Developer Portal',
  category: Category.work,
  tags: [
    TechTag.react,
    TechTag.ts,
    TechTag.sass,
    TechTag.oas3,
    TechTag.rails,
    TechTag.docker,
    TechTag.aws,
    TechTag.elasticBeanstalk,
    TechTag.cloudFormation,
    TechTag.apigee,
    TechTag.algolia,
    TechTag.contentStack,
  ],
  date: 'Jun 29, 2019',
  body: `<p>Yapstone is a large API based payment gateway that's
  been around for more than 18 years. As part of their new product
  offering, Transact, they wanted to make a new, best-in-class,
  experience for the potential developers who would be integrating
  with their APIs.</p>

  <p>Their old process involved a technical writer working closely
  with developers by maintaining a giant Swagger (OpenAPI)
  specification of their public API. Whenever there was a new
  change to the spec, the writer would make the changes manually,
  and once approved, would upload the new document to a Drupal
  site which would load an external service called Apiary that
  would serve as their public-facing developer portal experience.
  </p>

  <p>Unfortunately, this lead to a lot of user error from manually
  maintaining a spec, and since Apiary took a while to load, the
  frontend was less than ideal for a quality developer experience.
  Another downside to using Swagger, was that the product team
  couldn't make versions of the spec that would serve different
  use cases. For example, you couldn't have the same endpoint
  and show and hide parameters for a customer in the rent payment
  space versus a customer in e-commerce.
  </p>

  <p>We came in to overhaul their developer portal pipeline and
  intended to solve a lot of the headaches they were having
  with the old process while creating an incredible developer
  experience. As part of this, we created a custom Swagger
  authoring tool called the Flavorizer, a backend Rails
  service that allowed developers to register and get test keys
  for Yapstone's new APIs, and a React app for the frontend
  experience.</p>

  <p>The Flavorizer was built to take in Swagger from an S3 bucket
   that was automatically updated whenever there was a new release
   tagged in Git. Technical writers could then chose which endpoint
   and method they wanted to edit, and were then taken to an
   interactive Swagger editor where they could decorate or
   'flavorize' their chosen piece of the spec. We only allowed
   editors to edit pieces of the spec that wouldn't break it.
   For example, we whitelisted the ability to edit descriptions
   and examples, but not change whether a certain parameter was
   required or not. These changes were saved in Contentstack
   (the headless CMS that maintained all the developer portal's content)
   and associated with articles on the frontend. By using this tool,
   editors could decorate endpoints, and hide or remove unnecessary
   parameters to create valid subsets of the spec. In other words,
   product strategists could now use the same Swagger as the source
   of truth, yet market to types of customers.</p>

  <p>We also created a backend service to allow developers to
  register for test accounts and get test keys through Apigee –
  Yapstone's API gateway. These new users were also tracked as
  new leads for sales purposes. We wrote Cloudformation templates
  to deploy our Dockerized Rails app to AWS' Elasticbeanstalk.
  </p>

  <p>The frontend was a Create React App that we hosted on S3 and
  cached at the edge with Cloudfront. We also wrote Cloudformation
  templates to spin up our infrastructure resources and deploy new
  changes to Yapstone's internal VPCs. The frontend had a bunch of
  interesting features like auto-generated request and response
  bodies, auto-generated code snippets in a variety of languages,
  site-wide search, and even dark mode!
  </p>
  `,
  link: 'https://docs.yapstone.com',
  imageFile: 'yapstone-devportal.png',
  imageAlt: `Screenshot of Yapstone's Developer Portal`,
}
