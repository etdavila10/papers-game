import axios from 'axios';

// Arxiv IDS have the following form YYMM.number where number is five digits or four
// 1912.04460
// We will only be searching by Arxiv IDS
const baseUrl = `https://papersapi.com/random`;

// For testing purposes only.
// const testResponse = [
//     {
//         "id": "http://arxiv.org/abs/2301.03149v2",
//         "updated": "2023-01-16T17:48:03Z",
//         "published": "2023-01-09T02:24:47Z",
//         "title": "\"A Handbook of Integer Sequences\" Fifty Years Later",
//         "summary": "Until 1973 there was no database of integer sequences. Someone coming across\nthe sequence 1, 2, 4, 9, 21, 51, 127,... would have had no way of discovering\nthat it had been studied since 1870 (today these are called the Motzkin\nnumbers, and form entry A001006 in the database). Everything changed in 1973\nwith the publication of \"A Handbook of Integer Sequences.",
//         "author": {
//             "name": "N. J. A. Sloane"
//         },
//         "arxiv:comment": {
//             "@xmlns:arxiv": "http://arxiv.org/schemas/atom",
//             "#text": "23 pages, 12 figures. Added a reference, minor updates and\n  corrections"
//         },
//         "link": [
//             {
//                 "@href": "http://arxiv.org/abs/2301.03149v2",
//                 "@rel": "alternate",
//                 "@type": "text/html"
//             },
//             {
//                 "@title": "pdf",
//                 "@href": "http://arxiv.org/pdf/2301.03149v2",
//                 "@rel": "related",
//                 "@type": "application/pdf"
//             }
//         ],
//         "arxiv:primary_category": {
//             "@xmlns:arxiv": "http://arxiv.org/schemas/atom",
//             "@term": "math.NT",
//             "@scheme": "http://arxiv.org/schemas/atom"
//         },
//         "category": [
//             {
//                 "@term": "math.NT",
//                 "@scheme": "http://arxiv.org/schemas/atom"
//             },
//             {
//                 "@term": "math.CO",
//                 "@scheme": "http://arxiv.org/schemas/atom"
//             },
//             {
//                 "@term": "05-00, 11-00, 11Bxx, 48-00, 68-00",
//                 "@scheme": "http://arxiv.org/schemas/atom"
//             }
//         ]
//     },
//     {
//         "id": "http://arxiv.org/abs/0705.4611v1",
//         "updated": "2007-05-31T14:03:43Z",
//         "published": "2007-05-31T14:03:43Z",
//         "title": "Photometry of the dwarf nova AW Sagittae during the 2006 November\n  superoutburst",
//         "summary": "During 2006 November an outburst of the dwarf nova AW Sge was observed using\nCCD photometry. This revealed 0.25 magnitude superhumps confirming it to be a\nsuperoutburst, possibly only the second confirmed such outburst of this star.\nThe superhumps were observed for 4 days and had a stable period Psh =\n0.0745(2)d, a value which is consistent with Psh measured during the 2000\nsuperoutburst.",
//         "author": [
//             {
//                 "name": "Jeremy Shears"
//             },
//             {
//                 "name": "Roger Pickard"
//             },
//             {
//                 "name": "Tom Krajci"
//             },
//             {
//                 "name": "Gary Poyner"
//             }
//         ],
//         "arxiv:comment": {
//             "@xmlns:arxiv": "http://arxiv.org/schemas/atom",
//             "#text": "10 pages, 9 figures. Accepted for publication in the Journal of the\n  British Astronomical Association"
//         },
//         "link": [
//             {
//                 "@href": "http://arxiv.org/abs/0705.4611v1",
//                 "@rel": "alternate",
//                 "@type": "text/html"
//             },
//             {
//                 "@title": "pdf",
//                 "@href": "http://arxiv.org/pdf/0705.4611v1",
//                 "@rel": "related",
//                 "@type": "application/pdf"
//             }
//         ],
//         "arxiv:primary_category": {
//             "@xmlns:arxiv": "http://arxiv.org/schemas/atom",
//             "@term": "astro-ph",
//             "@scheme": "http://arxiv.org/schemas/atom"
//         },
//         "category": {
//             "@term": "astro-ph",
//             "@scheme": "http://arxiv.org/schemas/atom"
//         }
//     }
// ]

const getArticles = () => (
  axios
    .get(baseUrl)
    .then(response => { return response.data;})
);

export default getArticles;
