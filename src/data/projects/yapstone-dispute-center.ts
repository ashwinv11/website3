import { Category, TechTag } from '@/enums'
import { Project } from '@/interfaces'

export const YapstoneDisputeCenter: Project = {
  slug: 'yapstone-dispute-center',
  title: 'Yapstone Dispute Center',
  category: Category.work,
  tags: [
    TechTag.react,
    TechTag.ts,
    TechTag.cssInJs,
    TechTag.emotion,
    TechTag.aws,
    TechTag.cloudFormation,
  ],
  date: 'Dec 2, 2019',
  body: `<p>Yapstone is a large API based payment gateway that's
  been around for more than 18 years. As part of their new product
  offering, Transact, they wanted to make a better experience for
  merchants and agents to deal with the credit card chargeback process.
  </p>

  <p>The chargeback process involves a lot of parties when it comes
  to disputing a chargeback. In most cases, there's the merchant –
  the person who receives the chargeback on their card, the payment
  gateway – Yapstone, and the payment processor – Visa, American
  Express, or Mastercard. In order for a merchant to dispute a
  chargeback, there needs to be enough evidence collected by the
  merchant to present their case to the payment processor. In order
  to help merchants, Yapstone currently has a team of chargeback
  specialists to assist customers to compile and submit their
  evidence to the payment processor.
  </p>

  <p>Previously, the evidence collection and communication between
  the chargeback agents and the merchants were all done via email
  with Zendesk. Then, agents were instructed to manually download
  all the evidence and merge them together in a PDF file. Finally,
  they would upload the final file to the payment processor for review.
  </p>

  <p>To streamline this process, we designed and built an experience
  where the merchant could upload their evidence themselves, and
  preview their rebuttal letter PDF in the browser before submitting
  it to the agent to review. This moved the onus of evidence collection
  onto the merchant and cut down the agent's time spent on manual
  merging documents together. Unfortunately, the payment processors
  don't let you upload the final file via an API so this had to still
  be manually reviewed by the chargeback agents.
  </p>

  <p>Our experience was a Create React App that we hosted on S3 and
  cached at the edge with Cloudfront. We used Yapstone's Transact
  APIs to manage the dispute workflow and the UI state. We read data
  from their GraphQL API built off of Elasticsearch, and updated
  the disputes using their RESTful dispute microservices.
  </p>
  `,
  imageFile: 'yapstone-dc-ui.png',
  imageAlt: `Screenshot of Yapstone's Dispute Center`,
}
