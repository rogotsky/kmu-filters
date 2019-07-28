export default [
  {
    name: 'Bereich',
    slug: 'd_bereich',
    relation: 'OR',
    items: [
      {
        name: 'Management',
        slug: 'management'
      },
      {
        name: 'Marketing & Vertrieb',
        slug: 'marketing-vertrieb'
      },
      {
        name: 'HR & Administration',
        slug: 'hr-administration'
      },
      {
        name: 'Mobilität & Reisen',
        slug: 'mobilitaet-reisen'
      },
      {
        name: 'Strategie & Recht',
        slug: 'strategie-recht'
      },
      {
        name: 'Technologie',
        slug: 'technologie'
      },
      {
        name: 'Sicherheit',
        slug: 'sicherheit'
      },
    ]
  },
  {
    name: 'Thema',
    slug: 'd_thema',
    relation: 'OR',
    items: [
      {
        name: 'Musterschreiben',
        slug: 'musterschreiben'
      },
      {
        name: 'Vorlagen',
        slug: 'vorlagen'
      },
      {
        name: 'Guidelines',
        slug: 'guidelines'
      },
      {
        name: 'Strategie & Recht',
        slug: 'strategie-recht'
      },
      {
        name: 'Technologie',
        slug: 'technologie'
      },
      {
        name: 'Sicherheit',
        slug: 'sicherheit'
      }
    ]
  },
  {
    name: 'Tags',
    slug: 'd_tag',
    relation: 'AND',
    items: [
      {
        name: 'Kündigung',
        slug: 'kuendigung'
      },
      {
        name: 'Vertrag',
        slug: 'vertrag'
      },
      {
        name: 'Arbeitsvertrag',
        slug: 'arbeitsvertrag'
      },
      {
        name: 'Checklisten',
        slug: 'checklisten'
      },
      {
        name: 'Ordnervorlage',
        slug: 'ordnervorlage'
      },
      {
        name: 'Briefvorlage',
        slug: 'briefvorlage'
      },
      {
        name: 'IT-Plan',
        slug: 'it-plan'
      }
    ]
  },
  {
    name: 'Rating',
    slug: 'd_rating',
    items: [
      {
        name: 1,
        slug: 1
      },
      {
        name: 2,
        slug: 2
      },
      {
        name: 3,
        slug: 3
      },
      {
        name: 4,
        slug: 4
      },
      {
        name: 5,
        slug: 5
      }
    ]
  }
];
