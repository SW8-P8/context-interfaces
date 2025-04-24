import { shuffleWithSeed } from '../helpers/Shuffler'

export interface Context {
  filename: string
  description: string
  brief: string
  trggerWarnings: string[]
}

const exampleContext: Context = {
  filename: '_example.jpg',
  description: 'This is an example discription of the content of an explicit image.',
  brief: 'Brief example description.',
  trggerWarnings: ['Example warning 1', 'Example warning 2'],
}

const originalContext: Context[] = [
  {
    filename: 'People_238_h.jpg',
    description: 'The aftermath of a mass shooting where numerous people lie deceased and bloodied.',
    brief: 'Deceased people.',
    trggerWarnings: ['Violence', 'Death', 'Disturbing imagery'],
  },
  {
    filename: 'Faces_367_h.jpg',
    description: 'An elderly man lying deceased on the floor in a pool of blood.',
    brief: 'A deceased person.',
    trggerWarnings: ['Death', 'Disturbing imagery'],
  },
  {
    filename: 'People_038_h.jpg',
    description: 'A man points a rifle at a child, who is lying on the ground.',
    brief: 'Gun violence.',
    trggerWarnings: ['Weapons', 'Child abuse', 'Disturbing content with threat'],
  },
  {
    filename: 'People_240_h.jpg',
    description: 'A large skin infection covers the entire torso of a child.',
    brief: 'A skin infection.',
    trggerWarnings: ['Medical content', 'Human bodies and functions', 'Disturbing imagery'],
  },
  {
    filename: 'People_208_h.jpg',
    description: 'A bloodied and mutilated hand sticking out from underneath a cover.',
    brief: 'A hand injury.',
    trggerWarnings: ['Death', 'Human bodies and functions', 'Disturbing imagery'],
  },
  {
    filename: 'People_201_v.jpg',
    description: 'The body of a man who has been hit and killed by a train.',
    brief: 'A deceased person.',
    trggerWarnings: ['Death', 'Accidents', 'Self-harm and suicide'],
  },
  {
    filename: 'Faces_159_h.jpg',
    description: 'A person who is receiving treatment for severe burns on their face.',
    brief: 'Facial burns.',
    trggerWarnings: ['Medical content', 'Human bodies and functions'],
  },
  {
    filename: 'Faces_365_v.jpg',
    description: 'A man who has lost his eyes and nose due to severe facial burns.',
    brief: 'Facial burns.',
    trggerWarnings: ['Medical content', 'Human bodies and functions'],
  },
  {
    filename: 'Objects_139_h.jpg',
    description: 'A severed and dirty doll head lying upon a pile of twigs.',
    brief: 'A broken toy.',
    trggerWarnings: ['Disturbing imagery'],
  },
  {
    filename: 'People_022_h.jpg',
    description: 'An overturned, severely damaged truck and a deceased person covered by a tarp.',
    brief: 'A deceased person.',
    trggerWarnings: ['Accidents', 'Death'],
  },
  {
    filename: 'People_198_h.jpg',
    description: 'A person receives treatment for a dry, swollen, and infected lower leg.',
    brief: 'An infected foot.',
    trggerWarnings: ['Medical content', 'Human bodies and functions', 'Disturbing imagery'],
  },
  {
    filename: 'Animals_074_h.jpg',
    description: 'A sick, old, and blind dog lying on a bed in a dirty room.',
    brief: 'Animal abuse.',
    trggerWarnings: ['Animal cruelty', 'Neglect'],
  },
  {
    filename: 'Faces_364_v.jpg',
    description: 'A child who has sustained an injury, resulting in the loss of their facial skin.',
    brief: 'A facial injury.',
    trggerWarnings: ['Human bodies and functions', 'Medical content', 'Disturbing imagery'],
  },
  {
    filename: 'People_218_v.jpg',
    description: 'A person receives treatment for a severe burn on their hand.',
    brief: 'Burns.',
    trggerWarnings: ['Human bodies and functions', 'Medical content', 'Disturbing imagery'],
  },
  {
    filename: 'People_227_h.jpg',
    description: 'A child receives treatment for burns to their stomach and thighs.',
    brief: 'Burns.',
    trggerWarnings: ['Human bodies and functions', 'Medical content', 'Disturbing imagery'],
  },
  {
    filename: 'People_221_h.jpg',
    description: 'A person receives treatment for a large laceration below their right eye.',
    brief: 'A facial injury.',
    trggerWarnings: ['Human bodies and functions', 'Medical content', 'Disturbing imagery'],
  },
  {
    filename: 'People_246_h.jpg',
    description: 'An elderly person who has sustained an injury, resulting in a severely swollen black eye.',
    brief: 'A facial injury.',
    trggerWarnings: ['Human bodies and functions'],
  },
  {
    filename: 'Animals_077_h.jpg',
    description: 'An unkept, injured dog who has bloodied wounds on its face.',
    brief: 'Animal abuse.',
    trggerWarnings: ['Animal cruelty', 'Neglect'],
  },
  {
    filename: 'People_205_v.jpg',
    description: 'A deceased man being pulled out of the water by two men.',
    brief: 'A deceased person.',
    trggerWarnings: ['Human bodies and functions', 'Death'],
  },
  {
    filename: 'People_127_h.jpg',
    description: 'A group of men violently beat up another person who is lying on the ground.',
    brief: 'Physical violence.',
    trggerWarnings: ['Violence', 'Physical/sexual abuse'],
  },
  {
    filename: 'People_237_h.jpg',
    description: "A piece of skin removed from a person's head, with attached ear, nose, and lip.",
    brief: 'Removed skin.',
    trggerWarnings: ['Medical content', 'Human bodies and functions', 'Disturbing imagery'],
  },
  {
    filename: 'Faces_371_v.jpg',
    description: 'A young child who has lost their right eye and is now disfigured.',
    brief: 'A facial injury.',
    trggerWarnings: ['Medical content', 'Human bodies and functions', 'Disturbing imagery'],
  },
  {
    filename: 'People_226_h.jpg',
    description: 'The body of an elderly woman who has been hit and killed by a tram.',
    brief: 'A deceased person.',
    trggerWarnings: ['Death', 'Accidents', 'Disturbing imagery'],
  },
  {
    filename: 'Faces_143_v.jpg',
    description: 'A woman who has sustained extensive burns, resulting in severe facial scarring and disfigurement.',
    brief: 'Facial burns.',
    trggerWarnings: ['Medical content', 'Human bodies and functions'],
  },
  {
    filename: 'Animals_056_h.jpg',
    description: 'A deceased black cat lying in the dirt with a bloodied ear and bulging eyeball.',
    brief: 'A deceased animal.',
    trggerWarnings: ['Animal cruelty', 'Death', 'Disturbing imagery'],
  },
  {
    filename: 'People_211_v.jpg',
    description: 'A severely injured hand with exposed tissue and bones on four fingers.',
    brief: 'A hand injury.',
    trggerWarnings: ['Medical content', 'Human bodies and functions', 'Disturbing imagery'],
  },
  {
    filename: 'People_220_h.jpg',
    description: 'A large skin infection covering the left chest area of a woman.',
    brief: 'A skin infection.',
    trggerWarnings: ['Medical content', 'Human bodies and functions', 'Disturbing imagery'],
  },
  {
    filename: 'Objects_125_h.jpg',
    description: 'A filthy, unflushed toilet containing used toilet paper and brown faecal matter.',
    brief: 'Faeces.',
    trggerWarnings: ['Upsetting content', 'Disturbing imagery'],
  },
  {
    filename: 'Faces_366_h.jpg',
    description: 'A man who is receiving stitches after sustaining deep facial cuts.',
    brief: 'A facial injury.',
    trggerWarnings: ['Medical content', 'Human bodies and functions'],
  },
  {
    filename: 'People_222_h.jpg',
    description: 'A man who is hanging from hooks in the skin of his back.',
    brief: 'Body injury.',
    trggerWarnings: ['Human bodies and functions', 'Explicit sexual content', 'Disturbing imagery'],
  },
]

export const context = [exampleContext, ...shuffleWithSeed(originalContext, 'sensitive-content')]
