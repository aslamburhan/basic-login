export const survey_json = {
    "app_identifier": "",
    "data": {
      "surveys": [
        {
          "frequency": null,
          "type": "Prescreen",
          "id": 1546,
          "questions": [
            
          ],
          "title": "Prescreen"
        },
        {
          "frequency": null,
          "type": "Profile",
          "id": 1542,
          "questions": [
            
            
            {
              "is_required": false,
              "show_question": true,
              "description": null,
              "title": "Where are you located?",
              "image": false,
              "can_skip": false,
              "display_params": null,
              "question_survey": 3525,
              "options": [
                {
                  "icon_name": null,
                  "display_name": "Yes",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 0,
                  "value": "Yes",
                  "id": 3521
                },
                {
                  "icon_name": null,
                  "display_name": "No",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 1,
                  "value": "No",
                  "id": 3522
                }
              ],
              "order": 2,
              "children": null,
              "display_type": "location",
              "arms": [
                
              ],
              "image_base64": null,
              "placeholder": null,
              "id": 3525,
              "question_id": 3260,
              "name": ""
            },
            {
              "is_required": false,
              "show_question": true,
              "description": null,
              "title": "Have been tested or do you think you have COVID infection?",
              "image": false,
              "can_skip": true,
              "display_params": null,
              "question_survey": 3552,
              "options": [
                {
                  "icon_name": null,
                  "display_name": "Tested positive",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 0,
                  "value": "Tested positive",
                  "id": 3534
                },
                {
                  "icon_name": null,
                  "display_name": "Tested Negative",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 1,
                  "value": "Tested Negative",
                  "id": 3535
                },
                {
                  "icon_name": null,
                  "display_name": "Not tested, my symptoms make me think I may have Coronavirus infection",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 2,
                  "value": "Not tested, my symptoms make me think I may have Coronavirus infection",
                  "id": 3536
                }
              ],
              "order": 3,
              "children": null,
              "arms": [
                
              ],
              "skip_options": [
                {
                  "skip_values": [
                    "Not tested",
                    " my symptoms make me think I may have Coronavirus infection",
                    "Tested positive"
                  ],
                  "skip_to_question_id": 3288
                },
                {
                  "skip_values": [
                    "Tested Negative"
                  ],
                  "skip_to_question_id": 3199
                }
              ],
              "display_type": "radio",
              "image_base64": null,
              "placeholder": null,
              "id": 3552,
              "question_id": 3287,
              "name": ""
            },
            
            {
              "is_required": false,
              "show_question": true,
              "description": null,
              "title": "How do you suspect you got the infection? ",
              "image": false,
              "can_skip": false,
              "display_params": null,
              "question_survey": 3553,
              "options": [
                {
                  "icon_name": null,
                  "display_name": "International travel",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 0,
                  "value": "International travel",
                  "id": 3537
                },
                {
                  "icon_name": null,
                  "display_name": "Travel within country",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 1,
                  "value": "Travel within country",
                  "id": 3538
                },
                {
                  "icon_name": null,
                  "display_name": "Attended community gathering",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 2,
                  "value": "Attended community gathering",
                  "id": 3539
                },
                {
                  "icon_name": null,
                  "display_name": "Went to a grocery store, pharmacy, hospital or airport",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 3,
                  "value": "Went to a grocery store, pharmacy, hospital or airport",
                  "id": 3540
                },
                {
                  "icon_name": null,
                  "display_name": "Met a friend/acquaintance ",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 4,
                  "value": "Met a friend/acquaintance ",
                  "id": 3541
                },
                {
                  "icon_name": null,
                  "display_name": "Home delivery personnel/house help",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 5,
                  "value": "Home delivery personnel/house help",
                  "id": 3548
                },
                {
                  "icon_name": null,
                  "display_name": "Went out for a walk",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 6,
                  "value": "Went out for a walk",
                  "id": 3549
                },
                {
                  "icon_name": null,
                  "display_name": "Do not know",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 7,
                  "value": "Do not know",
                  "id": 3550
                }
              ],
              "order": 4,
              "children": null,
              "display_type": "checkbox",
              "arms": [
                
              ],
              "image_base64": null,
              "placeholder": null,
              "id": 3553,
              "question_id": 3288,
              "name": ""
            },
            {
              "is_required": false,
              "show_question": true,
              "description": null,
              "title": "Do you have a history of Asthma/respiratory disorders?",
              "image": false,
              "can_skip": false,
              "display_params": null,
              "question_survey": 3464,
              "options": [
                {
                  "icon_name": null,
                  "display_name": "Yes",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 0,
                  "value": "Yes",
                  "id": 3337
                },
                {
                  "icon_name": null,
                  "display_name": "No",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 1,
                  "value": "No",
                  "id": 3338
                },
                {
                  "icon_name": null,
                  "display_name": "Not Sure",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 2,
                  "value": "Not Sure",
                  "id": 3339
                }
              ],
              "order": 5,
              "children": null,
              "display_type": "radio",
              "arms": [
                
              ],
              "image_base64": null,
              "placeholder": null,
              "id": 3464,
              "question_id": 3199,
              "name": ""
            },
            {
              "is_required": false,
              "show_question": true,
              "description": null,
              "title": "Do you smoke?",
              "image": false,
              "can_skip": false,
              "display_params": null,
              "question_survey": 3466,
              "options": [
                {
                  "icon_name": null,
                  "display_name": "I have never smoked",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 0,
                  "value": "I have never smoked",
                  "id": 3348
                },
                {
                  "icon_name": null,
                  "display_name": "I smoke sporadically and/or on rare occasions",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 1,
                  "value": "I smoke sporadically and/or on rare occasions",
                  "id": 3349
                },
                {
                  "icon_name": null,
                  "display_name": "Currently, I smoke regularly. ",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 2,
                  "value": "Currently, I smoke regularly. ",
                  "id": 3500
                },
                {
                  "icon_name": null,
                  "display_name": " I used to smoke in the past.",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 3,
                  "value": " I used to smoke in the past.",
                  "id": 3501
                }
              ],
              "order": 6,
              "children": null,
              "display_type": "radio",
              "arms": [
                
              ],
              "image_base64": null,
              "placeholder": null,
              "id": 3466,
              "question_id": 3201,
              "name": ""
            },
            {
              "is_required": false,
              "show_question": true,
              "description": null,
              "title": "Do you normally engage in some kind of physical activity everyday?",
              "image": false,
              "can_skip": false,
              "display_params": null,
              "question_survey": 3469,
              "options": [
                {
                  "icon_name": null,
                  "display_name": "Yes",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 0,
                  "value": "Yes",
                  "id": 3355
                },
                {
                  "icon_name": null,
                  "display_name": "No",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 1,
                  "value": "No",
                  "id": 3356
                },
                {
                  "icon_name": null,
                  "display_name": "3-4 days a week",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 2,
                  "value": "3-4 days a week",
                  "id": 3357
                }
              ],
              "order": 7,
              "children": null,
              "display_type": "radio",
              "arms": [
                
              ],
              "image_base64": null,
              "placeholder": null,
              "id": 3469,
              "question_id": 3204,
              "name": ""
            },
            {
                "is_required": false,
                "show_question": true,
                "description": null,
                "title": "What age range do you belong to?",
                "image": false,
                "can_skip": false,
                "display_params": null,
                "question_survey": 3461,
                "options": [
                  {
                    "icon_name": null,
                    "display_name": "12-15",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 0,
                    "value": "12-15",
                    "id": 3320
                  },
                  {
                    "icon_name": null,
                    "display_name": "15-19",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 1,
                    "value": "15-19",
                    "id": 3321
                  },
                  {
                    "icon_name": null,
                    "display_name": "20-25",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 2,
                    "value": "20-25",
                    "id": 3322
                  },
                  {
                    "icon_name": null,
                    "display_name": "26-30",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 3,
                    "value": "26-30",
                    "id": 3323
                  },
                  {
                    "icon_name": null,
                    "display_name": "31-35",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 4,
                    "value": "31-35",
                    "id": 3324
                  },
                  {
                    "icon_name": null,
                    "display_name": "36-40",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 5,
                    "value": "36-40",
                    "id": 3325
                  },
                  {
                    "icon_name": null,
                    "display_name": "41-45",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 6,
                    "value": "41-45",
                    "id": 3326
                  },
                  {
                    "icon_name": null,
                    "display_name": "46-50",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 7,
                    "value": "46-50",
                    "id": 3327
                  },
                  {
                    "icon_name": null,
                    "display_name": "51-55",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 8,
                    "value": "51-55",
                    "id": 3328
                  },
                  {
                    "icon_name": null,
                    "display_name": "56-60",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 9,
                    "value": "56-60",
                    "id": 3329
                  },
                  {
                    "icon_name": null,
                    "display_name": "61-65",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 10,
                    "value": "61-65",
                    "id": 3330
                  },
                  {
                    "icon_name": null,
                    "display_name": "66-70",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 11,
                    "value": "66-70",
                    "id": 3331
                  },
                  {
                    "icon_name": null,
                    "display_name": "71-75",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 12,
                    "value": "71-75",
                    "id": 3332
                  },
                  {
                    "icon_name": null,
                    "display_name": "75-80",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 13,
                    "value": "75-80",
                    "id": 3333
                  },
                  {
                    "icon_name": null,
                    "display_name": "81 or above ",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 14,
                    "value": "81 or above ",
                    "id": 3408
                  }
                ],
                "order": 0,
                "children": null,
                "display_type": "dropdown",
                "arms": [
                  
                ],
                "image_base64": null,
                "placeholder": null,
                "id": 3461,
                "question_id": 3196,
                "name": ""
              },
            {
              "is_required": false,
              "show_question": true,
              "description": null,
              "title": "Please indicate your dietary preferences.",
              "image": false,
              "can_skip": false,
              "display_params": null,
              "question_survey": 3467,
              "options": [
                {
                  "icon_name": null,
                  "display_name": "Vegan (Avoid all animal and animal-derived products)",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 0,
                  "value": "Vegan (Avoid all animal and animal-derived products)",
                  "id": 3350
                },
                {
                  "icon_name": null,
                  "display_name": "Ovo Vegetarian (Avoid all animal products except egg)",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 1,
                  "value": "Ovo Vegetarian (Avoid all animal products except egg)",
                  "id": 3351
                },
                {
                  "icon_name": null,
                  "display_name": "Lacto Vegetarian (Avoid animal flesh and eggs but consume dairy)",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 2,
                  "value": "Lacto Vegetarian (Avoid animal flesh and eggs but consume dairy)",
                  "id": 3352
                },
                {
                  "icon_name": null,
                  "display_name": "Lacto-ovo Vegetarian (Avoid all animal flesh but consume dairy & egg products) ",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 3,
                  "value": "Lacto-ovo Vegetarian (Avoid all animal flesh but consume dairy & egg products) ",
                  "id": 3353
                },
                {
                  "icon_name": null,
                  "display_name": "Non vegetarian ",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 4,
                  "value": "Non vegetarian ",
                  "id": 3354
                }
              ],
              "order": 8,
              "children": null,
              "display_type": "radio",
              "arms": [
                
              ],
              "image_base64": null,
              "placeholder": null,
              "id": 3467,
              "question_id": 3202,
              "name": ""
            },
            {
                "is_required": false,
                "show_question": true,
                "description": null,
                "title": "Please select your blood group.",
                "image": false,
                "can_skip": false,
                "display_params": null,
                "question_survey": 3536,
                "options": [
                  {
                    "icon_name": null,
                    "display_name": "A+",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 0,
                    "value": "A+",
                    "id": 3502
                  },
                  {
                    "icon_name": null,
                    "display_name": "A- ",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 1,
                    "value": "A- ",
                    "id": 3503
                  },
                  {
                    "icon_name": null,
                    "display_name": "B+ ",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 2,
                    "value": "B+ ",
                    "id": 3504
                  },
                  {
                    "icon_name": null,
                    "display_name": "B- ",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 3,
                    "value": "B- ",
                    "id": 3505
                  },
                  {
                    "icon_name": null,
                    "display_name": "O+ ",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 4,
                    "value": "O+ ",
                    "id": 3506
                  },
                  {
                    "icon_name": null,
                    "display_name": "O- ",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 5,
                    "value": "O- ",
                    "id": 3507
                  },
                  {
                    "icon_name": null,
                    "display_name": "AB+ ",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 6,
                    "value": "AB+ ",
                    "id": 3508
                  },
                  {
                    "icon_name": null,
                    "display_name": "AB-",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 7,
                    "value": "AB-",
                    "id": 3509
                  },
                  {
                    "icon_name": null,
                    "display_name": "Don't know",
                    "select": "",
                    "is_expected_value": false,
                    "unselect": "",
                    "identifier": "choices",
                    "order": 8,
                    "value": "Don't know",
                    "id": 3519
                  }
                ],
                "order": 1,
                "children": null,
                "display_type": "radio",
                "arms": [
                  
                ],
                "image_base64": null,
                "placeholder": null,
                "id": 3536,
                "question_id": 3271,
                "name": ""
              },
            {
              "is_required": false,
              "show_question": true,
              "description": "According to published research, COVID-19 is affecting older people more than young, smokers more than non smokers, and those with pre-existing illness and type A blood group are more susceptible. (See references under \"Insights\"). Track your symptoms daily. Stay safe!",
              "title": "Thank you for filling in your details. ",
              "image": false,
              "can_skip": false,
              "display_params": null,
              "question_survey": 3471,
              "options": [
                {
                  "icon_name": null,
                  "display_name": "Yes",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 0,
                  "value": "Yes",
                  "id": 3362
                },
                {
                  "icon_name": null,
                  "display_name": "No",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 1,
                  "value": "No",
                  "id": 3363
                }
              ],
              "order": 9,
              "children": null,
              "display_type": "instruction",
              "arms": [
                
              ],
              "image_base64": null,
              "placeholder": null,
              "id": 3471,
              "question_id": 3206,
              "name": ""
            }
          ],
          "title": "Onboarding Profile Survey"
        },
        {
          "frequency": "daily",
          "type": "General",
          "id": 1543,
          "questions": [
            {
              "is_required": false,
              "show_question": true,
              "description": null,
              "title": "Do you have fever?",
              "image": false,
              "can_skip": true,
              "display_params": null,
              "question_survey": 3472,
              "options": [
                {
                  "icon_name": null,
                  "display_name": "Yes",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 0,
                  "value": "Yes",
                  "id": 3364
                },
                {
                  "icon_name": null,
                  "display_name": "No",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 1,
                  "value": "No",
                  "id": 3365
                },
                {
                  "icon_name": null,
                  "display_name": "Not Sure",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 2,
                  "value": "Not Sure",
                  "id": 3482
                }
              ],
              "order": 0,
              "children": null,
              "arms": [
                
              ],
              "skip_options": [
                {
                  "skip_values": [
                    "Yes",
                    "Not Sure"
                  ],
                  "skip_to_question_id": 3237
                },
                {
                  "skip_values": [
                    "No"
                  ],
                  "skip_to_question_id": 3210
                }
              ],
              "display_type": "radio",
              "image_base64": null,
              "placeholder": null,
              "id": 3472,
              "question_id": 3207,
              "name": ""
            },
            {
              "is_required": false,
              "show_question": true,
              "description": null,
              "title": "Please select your recently recorded body temperature range.",
              "image": false,
              "can_skip": false,
              "display_params": null,
              "question_survey": 3502,
              "options": [
                {
                  "icon_name": null,
                  "display_name": "Below 97.9 degree F",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 0,
                  "value": "Below 97.9 degree F",
                  "id": 3411
                },
                {
                  "icon_name": null,
                  "display_name": "97.9 - 98.9 degree F",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 1,
                  "value": "97.9 - 98.9 degree F",
                  "id": 3412
                },
                {
                  "icon_name": null,
                  "display_name": "99.0 - 99.9 degree F ",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 2,
                  "value": "99.0 - 99.9 degree F ",
                  "id": 3413
                },
                {
                  "icon_name": null,
                  "display_name": "100 - 100.9 degree F ",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 3,
                  "value": "100 - 100.9 degree F ",
                  "id": 3414
                },
                {
                  "icon_name": null,
                  "display_name": "101 - 101.9 degree F ",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 4,
                  "value": "101 - 101.9 degree F ",
                  "id": 3415
                },
                {
                  "icon_name": null,
                  "display_name": "102 - 102.9 degree F",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 5,
                  "value": "102 - 102.9 degree F",
                  "id": 3416
                },
                {
                  "icon_name": null,
                  "display_name": "103 degree F or above",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 6,
                  "value": "103 degree F or above",
                  "id": 3417
                }
              ],
              "order": 1,
              "children": null,
              "display_type": "radio",
              "arms": [
                
              ],
              "image_base64": null,
              "placeholder": null,
              "id": 3502,
              "question_id": 3237,
              "name": ""
            },
            {
              "is_required": false,
              "show_question": true,
              "description": null,
              "title": "Do you experience fatigue today?",
              "image": false,
              "can_skip": false,
              "display_params": null,
              "question_survey": 3475,
              "options": [
                {
                  "icon_name": null,
                  "display_name": "Yes",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 0,
                  "value": "Yes",
                  "id": 3368
                },
                {
                  "icon_name": null,
                  "display_name": "No",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 1,
                  "value": "No",
                  "id": 3369
                },
                {
                  "icon_name": null,
                  "display_name": "Not sure",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 2,
                  "value": "Not sure",
                  "id": 3483
                }
              ],
              "order": 2,
              "children": null,
              "display_type": "radio",
              "arms": [
                
              ],
              "image_base64": null,
              "placeholder": null,
              "id": 3475,
              "question_id": 3210,
              "name": ""
            },
            {
              "is_required": false,
              "show_question": true,
              "description": null,
              "title": "Are you having dry cough today? ",
              "image": false,
              "can_skip": false,
              "display_params": null,
              "question_survey": 3474,
              "options": [
                {
                  "icon_name": null,
                  "display_name": "Yes",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 0,
                  "value": "Yes",
                  "id": 3366
                },
                {
                  "icon_name": null,
                  "display_name": "No",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 1,
                  "value": "No",
                  "id": 3367
                },
                {
                  "icon_name": null,
                  "display_name": "Not sure",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 2,
                  "value": "Not sure",
                  "id": 3485
                }
              ],
              "order": 3,
              "children": null,
              "display_type": "radio",
              "arms": [
                
              ],
              "image_base64": null,
              "placeholder": null,
              "id": 3474,
              "question_id": 3209,
              "name": ""
            },
            {
              "is_required": false,
              "show_question": true,
              "description": null,
              "title": "Please indicate your muscle pain on the scale of 0 to 10 (0= no pain; 10 = worst pain possible)?",
              "placeholder": null,
              "image": false,
              "can_skip": false,
              "display_params": null,
              "question_survey": 3526,
              "options": [
                {
                  "icon_name": null,
                  "display_name": "Yes",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 0,
                  "value": "Yes",
                  "id": 3494
                },
                {
                  "icon_name": null,
                  "display_name": "No",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 1,
                  "value": "No",
                  "id": 3495
                }
              ],
              "order": 4,
              "children": null,
              "display_type": "scale",
              "arms": [
                
              ],
              "image_base64": null,
              "scale_options": {
                "max_value": 10,
                "step": 1,
                "min_value": 0
              },
              "id": 3526,
              "question_id": 3261,
              "name": ""
            },
            {
              "is_required": false,
              "show_question": true,
              "description": null,
              "title": "Do you experience shortness of breath (Dyspnea) today? (Difficulty breathing lying down, walking normally or climbing steps)",
              "image": false,
              "can_skip": false,
              "display_params": null,
              "question_survey": 3476,
              "options": [
                {
                  "icon_name": null,
                  "display_name": "Yes",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 0,
                  "value": "Yes",
                  "id": 3370
                },
                {
                  "icon_name": null,
                  "display_name": "No",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 1,
                  "value": "No",
                  "id": 3371
                },
                {
                  "icon_name": null,
                  "display_name": "Not sure",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 2,
                  "value": "Not sure",
                  "id": 3484
                }
              ],
              "order": 5,
              "children": null,
              "display_type": "radio",
              "arms": [
                
              ],
              "image_base64": null,
              "placeholder": null,
              "id": 3476,
              "question_id": 3211,
              "name": ""
            },
            {
              "is_required": false,
              "show_question": true,
              "description": null,
              "title": "Which of the following symptoms do you notice today? ",
              "image": false,
              "can_skip": false,
              "display_params": null,
              "question_survey": 3537,
              "options": [
                {
                  "icon_name": null,
                  "display_name": "Headache",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 0,
                  "value": "Headache",
                  "id": 3513
                },
                {
                  "icon_name": null,
                  "display_name": "Dizziness",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 1,
                  "value": "Dizziness",
                  "id": 3514
                },
                {
                  "icon_name": null,
                  "display_name": "Abdominal pain",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 2,
                  "value": "Abdominal pain",
                  "id": 3515
                },
                {
                  "icon_name": null,
                  "display_name": "Diarrhea",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 3,
                  "value": "Diarrhea",
                  "id": 3516
                },
                {
                  "icon_name": null,
                  "display_name": "Nausea ",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 4,
                  "value": "Nausea ",
                  "id": 3517
                },
                {
                  "icon_name": null,
                  "display_name": "Vomiting",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 5,
                  "value": "Vomiting",
                  "id": 3518
                },
                {
                  "icon_name": null,
                  "display_name": "None",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 6,
                  "value": "None",
                  "id": 3520
                }
              ],
              "order": 6,
              "children": null,
              "display_type": "checkbox",
              "arms": [
                
              ],
              "image_base64": null,
              "placeholder": null,
              "id": 3537,
              "question_id": 3272,
              "name": ""
            },
            {
              "is_required": false,
              "show_question": true,
              "description": null,
              "title": "Do you notice any alteration in your capacity to smell odours around you today?",
              "image": false,
              "can_skip": false,
              "display_params": null,
              "question_survey": 3554,
              "options": [
                {
                  "icon_name": null,
                  "display_name": "Yes",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 0,
                  "value": "Yes",
                  "id": 3542
                },
                {
                  "icon_name": null,
                  "display_name": "No",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 1,
                  "value": "No",
                  "id": 3543
                },
                {
                  "icon_name": null,
                  "display_name": "Not sure",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 2,
                  "value": "Not sure",
                  "id": 3544
                }
              ],
              "order": 7,
              "children": null,
              "display_type": "radio",
              "arms": [
                
              ],
              "image_base64": null,
              "placeholder": null,
              "id": 3554,
              "question_id": 3289,
              "name": ""
            },
            {
              "is_required": false,
              "show_question": true,
              "description": null,
              "title": "Do you notice any alteration in your capacity to taste today? ",
              "image": false,
              "can_skip": false,
              "display_params": null,
              "question_survey": 3555,
              "options": [
                {
                  "icon_name": null,
                  "display_name": "Yes",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 0,
                  "value": "Yes",
                  "id": 3545
                },
                {
                  "icon_name": null,
                  "display_name": "No",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 1,
                  "value": "No",
                  "id": 3546
                },
                {
                  "icon_name": null,
                  "display_name": "Not sure",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 2,
                  "value": "Not sure",
                  "id": 3547
                }
              ],
              "order": 8,
              "children": null,
              "display_type": "radio",
              "arms": [
                
              ],
              "image_base64": null,
              "placeholder": null,
              "id": 3555,
              "question_id": 3290,
              "name": ""
            },
            {
              "is_required": false,
              "show_question": true,
              "description": null,
              "title": "How was your appetite today?",
              "image": false,
              "can_skip": false,
              "display_params": null,
              "question_survey": 3484,
              "options": [
                {
                  "icon_name": null,
                  "display_name": "Good, I ate all my meals normally. ",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 0,
                  "value": "Good, I ate all my meals normally. ",
                  "id": 3391
                },
                {
                  "icon_name": null,
                  "display_name": "Could eat half of what I eat normally ",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 1,
                  "value": "Could eat half of what I eat normally ",
                  "id": 3392
                },
                {
                  "icon_name": null,
                  "display_name": "Could eat very less or not at all",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 2,
                  "value": "Could eat very less or not at all",
                  "id": 3393
                }
              ],
              "order": 9,
              "children": null,
              "display_type": "radio",
              "arms": [
                
              ],
              "image_base64": null,
              "placeholder": null,
              "id": 3484,
              "question_id": 3219,
              "name": ""
            },
            {
              "is_required": false,
              "show_question": true,
              "description": "Check insights to see how you are faring compared to others using the app. Also checkout the global COVID-19 caseload map and stay updated with the latest information.\n",
              "title": "Thank you for filling in this log to keep track of your daily infection related symptoms.",
              "image": false,
              "can_skip": false,
              "display_params": null,
              "question_survey": 3485,
              "options": [
                {
                  "icon_name": null,
                  "display_name": "Yes",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 0,
                  "value": "Yes",
                  "id": 3492
                },
                {
                  "icon_name": null,
                  "display_name": "No",
                  "select": "",
                  "is_expected_value": false,
                  "unselect": "",
                  "identifier": "choices",
                  "order": 1,
                  "value": "No",
                  "id": 3493
                }
              ],
              "order": 10,
              "children": null,
              "display_type": "instruction",
              "arms": [
                
              ],
              "image_base64": null,
              "placeholder": null,
              "id": 3485,
              "question_id": 3220,
              "name": ""
            }
          ],
          "title": "Daily Covid Symptoms Log "
        }
      ]
    },
    "generated_on": "2020-03-27T09:52:22.768742"
  }