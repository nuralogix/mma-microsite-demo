// data.js
const DeepAffexWebResultsData = (() => {
    const sections = [
        {
            "titleLocalizationKey": "SCREEN_RESULTS_SUBTITLE_OVERALL",
            "pointsIDs": [
                "VITAL_SCORE",
                "PHYSIO_SCORE",
                "MENTAL_SCORE",
                "PHYSICAL_SCORE",
                "BP_CVD",
                "OVERALL_METABOLIC_RISK_PROB"
            ],
            "pointTitleOverrides": {
                "BP_CVD": "DFXPOINT_TITLE:BP_CVD:OVERALL",
                "OVERALL_METABOLIC_RISK_PROB": "DFXPOINT_TITLE:OVERALL_METABOLIC_RISK_PROB:OVERALL"
            }
        },
        {
            "titleLocalizationKey": "SCREEN_RESULTS_SUBTITLE_VITALS",
            "pointsIDs": [
                "HR_BPM",
                "IHB_COUNT",
                "BR_BPM",
                "BP_SYSTOLIC",
                "BP_DIASTOLIC",
                "TEMPERATURE_SENSOR"
            ]
        },
        {
            "titleLocalizationKey": "SCREEN_RESULTS_SUBTITLE_PHYSIOLOGICAL",
            "pointsIDs": [
                "HRV_SDNN",
                "BP_RPP",
                "BP_TAU",
                "VITALITY"
            ]
        },
        {
            "titleLocalizationKey": "SCREEN_RESULTS_SUBTITLE_MENTAL",
            "pointsIDs": [
                "MSI",
                "SLEEP_QUALITY",
                "ANXIETY_INDEX"
            ]
        },
        {
            "titleLocalizationKey": "SCREEN_RESULTS_SUBTITLE_PHYSICAL",
            "pointsIDs": [
                "AGE",
                "AGE_CVM",
                "HEIGHT",
                "WEIGHT",
                "WAIST_CIRCUM",
                "BMI_CALC",
                "ABSI",
                "WAIST_TO_HEIGHT"
            ]
        },
        {
            "titleLocalizationKey": "SCREEN_RESULTS_SUBTITLE_GENERALRISKS",
            "pointsIDs": [
                "BP_CVD",
                "CVD_MULTI_YEAR_RISK_PROBS",
                "BP_HEART_ATTACK",
                "BP_STROKE"
            ]
        },
        {
            "titleLocalizationKey": "SCREEN_RESULTS_SUBTITLE_METABOLICRISKS",
            "pointsIDs": [
                "OVERALL_METABOLIC_RISK_PROB",
                "HPT_RISK_PROB",
                "DBT_RISK_PROB",
                "HDLTC_RISK_PROB",
                "TG_RISK_PROB",
                "FLD_RISK_PROB"
            ]
        },
        {
            "titleLocalizationKey": "SCREEN_RESULTS_SUBTITLE_BLOODBIOMARKERS",
            "pointsIDs": [
                "HBA1C_RISK_PROB",
                "MFBG_RISK_PROB"
            ]
        }
    ];

    const definitions = {
        "pointDefinitions": {
            "HR_BPM": {
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "max": 60,
                                "color": "yellow",
                                "min": 20
                            },
                            {
                                "color": "green",
                                "min": 60,
                                "max": 100
                            },
                            {
                                "min": 100,
                                "color": "yellow",
                                "max": 140
                            }
                        ]
                    }
                },
                "key": "HR_BPM",
                "upperBound": 140,
                "decimalPlaces": 0,
                "units": "BPM",
                "lowerBound": 40
            },
            "BR_BPM": {
                "key": "BR_BPM",
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "color": "yellow",
                                "min": 1.2,
                                "max": 12
                            },
                            {
                                "min": 12,
                                "color": "green",
                                "max": 25
                            },
                            {
                                "min": 25,
                                "max": 35,
                                "color": "yellow"
                            }
                        ]
                    }
                },
                "upperBound": 35,
                "lowerBound": 5,
                "decimalPlaces": 0,
                "units": "BRPM"
            },
            "HDLTC_RISK_PROB_AVG": {
                "decimalPlaces": 0,
                "key": "HDLTC_RISK_PROB_AVG",
                "units": "PERCENT",
                "lowerBound": 0,
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "color": "green",
                                "max": 25,
                                "min": 0
                            },
                            {
                                "color": "lightGreen",
                                "min": 25,
                                "max": 45
                            },
                            {
                                "min": 45,
                                "max": 55,
                                "color": "yellow"
                            },
                            {
                                "color": "lightRed",
                                "min": 55,
                                "max": 75
                            },
                            {
                                "color": "red",
                                "max": 100,
                                "min": 75
                            }
                        ]
                    }
                },
                "upperBound": 100
            },
            "HBA1C_RISK_PROB": {
                "upperBound": 100,
                "decimalPlaces": 0,
                "key": "HBA1C_RISK_PROB",
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "max": 25,
                                "color": "green",
                                "min": 0
                            },
                            {
                                "max": 45,
                                "min": 25,
                                "color": "lightGreen"
                            },
                            {
                                "min": 45,
                                "color": "yellow",
                                "max": 55
                            },
                            {
                                "color": "lightRed",
                                "min": 55,
                                "max": 75
                            },
                            {
                                "color": "red",
                                "min": 75,
                                "max": 100
                            }
                        ]
                    }
                },
                "units": "PERCENT",
                "lowerBound": 0
            },
            "MENTAL_SCORE": {
                "key": "MENTAL_SCORE",
                "units": "PERCENT",
                "upperBound": 100,
                "lowerBound": 0,
                "decimalPlaces": 0,
                "scales": {
                    "default": {
                        "segments": [
                            {"min": 0,  "max": 30,  "color": "red"},
                            {"min": 30, "max": 50,  "color": "lightRed"},
                            {"min": 50, "max": 70,  "color": "yellow"},
                            {"min": 70, "max": 90,  "color": "lightGreen"},
                            {"min": 90, "max": 100, "color": "green"}
                        ]
                    }
                }
            },
            "BP_RPP": {
                "decimalPlaces": 2,
                "upperBound": 4.3,
                "key": "BP_RPP",
                "lowerBound": 3.7,
                "units": "DECIBELS",
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "max": 3.8,
                                "min": 3.71,
                                "color": "green"
                            },
                            {
                                "color": "lightGreen",
                                "min": 3.8,
                                "max": 3.9
                            },
                            {
                                "color": "yellow",
                                "min": 3.9,
                                "max": 4.08
                            },
                            {
                                "min": 4.08,
                                "max": 4.18,
                                "color": "lightRed"
                            },
                            {
                                "color": "red",
                                "max": 4.28,
                                "min": 4.18
                            }
                        ]
                    }
                }
            },
            "RISKS_SCORE": {
                "lowerBound": 1,
                "upperBound": 5,
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "max": 2,
                                "color": "red",
                                "min": 1
                            },
                            {
                                "max": 3,
                                "min": 2,
                                "color": "lightRed"
                            },
                            {
                                "min": 3,
                                "color": "yellow",
                                "max": 4
                            },
                            {
                                "color": "lightGreen",
                                "min": 4,
                                "max": 5
                            },
                            {
                                "color": "green",
                                "min": 5,
                                "max": 5
                            }
                        ]
                    }
                },
                "key": "RISKS_SCORE",
                "decimalPlaces": 0,
                "units": ""
            },
            "BP_STROKE": {
                "lowerBound": 0,
                "units": "PERCENT",
                "upperBound": 66,
                "decimalPlaces": 0,
                "key": "BP_STROKE",
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "max": 3.3,
                                "color": "green",
                                "min": 0
                            },
                            {
                                "max": 4.79,
                                "min": 3.3,
                                "color": "lightGreen"
                            },
                            {
                                "color": "yellow",
                                "min": 4.79,
                                "max": 6.6
                            },
                            {
                                "max": 13.2,
                                "min": 6.6,
                                "color": "lightRed"
                            },
                            {
                                "min": 13.2,
                                "color": "red",
                                "max": 66
                            }
                        ]
                    }
                }
            },
            "HDLTC_RISK_PROB": {
                "decimalPlaces": 0,
                "key": "HDLTC_RISK_PROB",
                "upperBound": 100,
                "lowerBound": 0,
                "units": "PERCENT",
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "max": 25,
                                "min": 0,
                                "color": "green"
                            },
                            {
                                "min": 25,
                                "color": "lightGreen",
                                "max": 45
                            },
                            {
                                "color": "yellow",
                                "min": 45,
                                "max": 55
                            },
                            {
                                "color": "lightRed",
                                "max": 75,
                                "min": 55
                            },
                            {
                                "color": "red",
                                "max": 100,
                                "min": 75
                            }
                        ]
                    }
                }
            },
            "HPT_RISK_PROB": {
                "decimalPlaces": 0,
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "color": "green",
                                "max": 25,
                                "min": 0
                            },
                            {
                                "max": 45,
                                "min": 25,
                                "color": "lightGreen"
                            },
                            {
                                "max": 55,
                                "color": "yellow",
                                "min": 45
                            },
                            {
                                "max": 75,
                                "min": 55,
                                "color": "lightRed"
                            },
                            {
                                "min": 75,
                                "color": "red",
                                "max": 100
                            }
                        ]
                    }
                },
                "key": "HPT_RISK_PROB",
                "lowerBound": 0,
                "units": "PERCENT",
                "upperBound": 100
            },
            "IHB_COUNT": {
                "key": "IHB_COUNT",
                "decimalPlaces": 0,
                "units": "",
                "scales": {},
                "lowerBound": 0,
                "upperBound": 10
            },
            "ABSI": {
                "scales": {
                    "001:female": {
                        "segments": [
                            {
                                "color": "green",
                                "min": 6.2,
                                "max": 6.8
                            },
                            {
                                "min": 6.8,
                                "max": 7.4,
                                "color": "lightGreen"
                            },
                            {
                                "max": 8.6,
                                "color": "yellow",
                                "min": 7.4
                            },
                            {
                                "max": 9.2,
                                "min": 8.6,
                                "color": "lightRed"
                            },
                            {
                                "max": 9.8,
                                "color": "red",
                                "min": 9.2
                            }
                        ]
                    },
                    "001:male": {
                        "segments": [
                            {
                                "min": 6.6,
                                "color": "green",
                                "max": 7.1
                            },
                            {
                                "min": 7.1,
                                "max": 7.6,
                                "color": "lightGreen"
                            },
                            {
                                "max": 8.6,
                                "color": "yellow",
                                "min": 7.6
                            },
                            {
                                "max": 9.1,
                                "color": "lightRed",
                                "min": 8.6
                            },
                            {
                                "color": "red",
                                "max": 9.6,
                                "min": 9.1
                            }
                        ]
                    },
                    "default": {
                        "segments": [
                            {
                                "min": 6.6,
                                "max": 7.1,
                                "color": "green"
                            },
                            {
                                "color": "lightGreen",
                                "min": 7.1,
                                "max": 7.6
                            },
                            {
                                "max": 8.6,
                                "color": "yellow",
                                "min": 7.6
                            },
                            {
                                "color": "lightRed",
                                "max": 9.1,
                                "min": 8.6
                            },
                            {
                                "min": 9.1,
                                "max": 9.6,
                                "color": "red"
                            }
                        ]
                    },
                    "030:female": {
                        "segments": [
                            {
                                "max": 6.63,
                                "color": "lightGreen",
                                "min": 6.19
                            },
                            {
                                "min": 6.63,
                                "max": 7.07,
                                "color": "lightGreen"
                            },
                            {
                                "min": 7.07,
                                "max": 7.95,
                                "color": "yellow"
                            },
                            {
                                "color": "lightRed",
                                "min": 7.95,
                                "max": 8.39
                            },
                            {
                                "color": "red",
                                "min": 8.39,
                                "max": 8.83
                            }
                        ]
                    },
                    "030:male": {
                        "segments": [
                            {
                                "color": "green",
                                "max": 7.12,
                                "min": 6.75
                            },
                            {
                                "color": "lightGreen",
                                "min": 7.12,
                                "max": 7.49
                            },
                            {
                                "min": 7.49,
                                "max": 8.23,
                                "color": "yellow"
                            },
                            {
                                "color": "lightRed",
                                "max": 8.6,
                                "min": 8.23
                            },
                            {
                                "min": 8.6,
                                "max": 8.97,
                                "color": "red"
                            }
                        ]
                    }
                },
                "upperBound": 10,
                "decimalPlaces": 2,
                "key": "ABSI",
                "lowerBound": 6,
                "units": ""
            },
            "WAIST_TO_HEIGHT": {
                "lowerBound": 25,
                "upperBound": 70,
                "units": "PERCENT",
                "decimalPlaces": 0,
                "scales": {
                    "001:male": {
                        "segments": [
                            {
                                "min": 25,
                                "max": 43,
                                "color": "yellow"
                            },
                            {
                                "max": 53,
                                "color": "green",
                                "min": 43
                            },
                            {
                                "color": "yellow",
                                "min": 53,
                                "max": 58
                            },
                            {
                                "max": 63,
                                "min": 58,
                                "color": "lightRed"
                            },
                            {
                                "color": "red",
                                "min": 63,
                                "max": 75
                            }
                        ]
                    },
                    "001:female": {
                        "segments": [
                            {
                                "max": 42,
                                "color": "yellow",
                                "min": 25
                            },
                            {
                                "color": "green",
                                "min": 42,
                                "max": 49
                            },
                            {
                                "min": 49,
                                "color": "yellow",
                                "max": 54
                            },
                            {
                                "min": 54,
                                "max": 58,
                                "color": "lightRed"
                            },
                            {
                                "max": 70,
                                "color": "red",
                                "min": 58
                            }
                        ]
                    },
                    "030:male": {
                        "segments": [
                            {
                                "color": "yellow",
                                "min": 25,
                                "max": 43
                            },
                            {
                                "max": 53,
                                "min": 43,
                                "color": "green"
                            },
                            {
                                "max": 58,
                                "min": 53,
                                "color": "yellow"
                            },
                            {
                                "max": 63,
                                "color": "lightRed",
                                "min": 58
                            },
                            {
                                "min": 63,
                                "color": "red",
                                "max": 75
                            }
                        ]
                    },
                    "030:female": {
                        "segments": [
                            {
                                "min": 25,
                                "max": 42,
                                "color": "yellow"
                            },
                            {
                                "max": 49,
                                "min": 42,
                                "color": "green"
                            },
                            {
                                "min": 49,
                                "color": "yellow",
                                "max": 54
                            },
                            {
                                "color": "lightRed",
                                "max": 58,
                                "min": 54
                            },
                            {
                                "min": 58,
                                "color": "red",
                                "max": 70
                            }
                        ]
                    },
                    "default": {
                        "segments": [
                            {
                                "min": 25,
                                "max": 43,
                                "color": "yellow"
                            },
                            {
                                "min": 43,
                                "max": 53,
                                "color": "green"
                            },
                            {
                                "min": 53,
                                "max": 58,
                                "color": "yellow"
                            },
                            {
                                "max": 63,
                                "color": "lightRed",
                                "min": 58
                            },
                            {
                                "max": 75,
                                "min": 63,
                                "color": "red"
                            }
                        ]
                    }
                },
                "key": "WAIST_TO_HEIGHT"
            },
            "HRV_SDNN": {
                "units": "MILLISECONDS",
                "decimalPlaces": 1,
                "key": "HRV_SDNN",
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "color": "red",
                                "min": 1.1,
                                "max": 10.8
                            },
                            {
                                "color": "lightRed",
                                "min": 10.8,
                                "max": 16.4
                            },
                            {
                                "color": "yellow",
                                "min": 16.4,
                                "max": 35.5
                            },
                            {
                                "color": "lightGreen",
                                "max": 51.5,
                                "min": 35.5
                            },
                            {
                                "color": "green",
                                "min": 51.5,
                                "max": 80
                            }
                        ]
                    }
                },
                "lowerBound": 1,
                "upperBound": 80
            },
            "BP_TAU": {
                "lowerBound": 0,
                "decimalPlaces": 2,
                "key": "BP_TAU",
                "upperBound": 3,
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "min": 0,
                                "color": "red",
                                "max": 0.79
                            },
                            {
                                "min": 0.79,
                                "color": "lightRed",
                                "max": 1.12
                            },
                            {
                                "max": 1.78,
                                "color": "yellow",
                                "min": 1.12
                            },
                            {
                                "min": 1.78,
                                "color": "lightGreen",
                                "max": 2.11
                            },
                            {
                                "min": 2.11,
                                "max": 3,
                                "color": "green"
                            }
                        ]
                    }
                },
                "units": "SECONDS"
            },
            "DBT_RISK_PROB": {
                "key": "DBT_RISK_PROB",
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "min": 0,
                                "max": 25,
                                "color": "green"
                            },
                            {
                                "min": 25,
                                "color": "lightGreen",
                                "max": 45
                            },
                            {
                                "max": 55,
                                "color": "yellow",
                                "min": 45
                            },
                            {
                                "color": "lightRed",
                                "min": 55,
                                "max": 75
                            },
                            {
                                "color": "red",
                                "min": 75,
                                "max": 100
                            }
                        ]
                    }
                },
                "decimalPlaces": 0,
                "lowerBound": 0,
                "upperBound": 100,
                "units": "PERCENT"
            },
            "BMI": {
                "lowerBound": 10,
                "upperBound": 60,
                "units": "kg\/m²",
                "key": "BMI",
                "decimalPlaces": 0,
                "scales": {
                    "030:male": {
                        "segments": [
                            {
                                "max": 18.5,
                                "min": 10,
                                "color": "yellow"
                            },
                            {
                                "min": 18.5,
                                "color": "green",
                                "max": 24
                            },
                            {
                                "min": 24,
                                "color": "yellow",
                                "max": 28
                            },
                            {
                                "max": 35,
                                "color": "red",
                                "min": 28
                            }
                        ]
                    },
                    "default": {
                        "segments": [
                            {
                                "min": 10,
                                "max": 18.5,
                                "color": "yellow"
                            },
                            {
                                "color": "green",
                                "min": 18.5,
                                "max": 25
                            },
                            {
                                "color": "yellow",
                                "min": 25,
                                "max": 30
                            },
                            {
                                "max": 35,
                                "color": "lightRed",
                                "min": 30
                            },
                            {
                                "color": "red",
                                "min": 35,
                                "max": 60
                            }
                        ]
                    },
                    "030:female": {
                        "segments": [
                            {
                                "color": "yellow",
                                "max": 18.5,
                                "min": 10
                            },
                            {
                                "max": 24,
                                "min": 18.5,
                                "color": "green"
                            },
                            {
                                "color": "yellow",
                                "min": 24,
                                "max": 28
                            },
                            {
                                "color": "red",
                                "max": 35,
                                "min": 28
                            }
                        ]
                    }
                }
            },
            "CVD_MULTI_YEAR_RISK_PROBS": {
                "decimalPlaces": 0,
                "upperBound": 100,
                "key": "CVD_MULTI_YEAR_RISK_PROBS",
                "units": "PERCENT",
                "lowerBound": 0,
                "hideWhenMissing": true,
                "scales": {
                    "default": {
                        "segments": [
                            { "min": 0,    "max": 5,   "color": "green"     },
                            { "min": 5,    "max": 7.25,"color": "lightGreen"},
                            { "min": 7.25, "max": 10,  "color": "yellow"    },
                            { "min": 10,   "max": 20,  "color": "lightRed"  },
                            { "min": 20,   "max": 100, "color": "red"       }
                        ]
                    }
                }
            },
            "BP_CVD": {
                "decimalPlaces": 0,
                "upperBound": 100,
                "key": "BP_CVD",
                "units": "PERCENT",
                "lowerBound": 0,
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "min": 0,
                                "color": "green",
                                "max": 5
                            },
                            {
                                "color": "lightGreen",
                                "min": 5,
                                "max": 7.25
                            },
                            {
                                "max": 10,
                                "color": "yellow",
                                "min": 7.25
                            },
                            {
                                "min": 10,
                                "color": "lightRed",
                                "max": 20
                            },
                            {
                                "color": "red",
                                "min": 20,
                                "max": 100
                            }
                        ]
                    }
                }
            },
            "TEMPERATURE_SENSOR": {
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "color": "lightGreen",
                                "max": 36.5,
                                "min": 30
                            },
                            {
                                "min": 36.5,
                                "max": 37.5,
                                "color": "green"
                            },
                            {
                                "min": 37.5,
                                "max": 39.5,
                                "color": "yellow"
                            },
                            {
                                "min": 39.5,
                                "max": 41.5,
                                "color": "lightRed"
                            },
                            {
                                "max": 45,
                                "color": "red",
                                "min": 41.5
                            }
                        ]
                    }
                },
                "decimalPlaces": 1,
                "upperBound": 41.5,
                "key": "TEMPERATURE_SENSOR",
                "units": "CELSIUS",
                "lowerBound": 35
            },
            "AGE": {
                "scales": {},
                "decimalPlaces": 0,
                "upperBound": 100,
                "key": "AGE",
                "units": "",
                "lowerBound": 10
            },
            "AGE_CVM": {
                "scales": {},
                "decimalPlaces": 0,
                "upperBound": 110,
                "key": "AGE_CVM",
                "units": "YEARS",
                "lowerBound": 18,
                "hideWhenMissing": true
            },
            "HPT_RISK_PROB_AVG": {
                "units": "PERCENT",
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "color": "green",
                                "max": 25,
                                "min": 0
                            },
                            {
                                "min": 25,
                                "max": 45,
                                "color": "lightGreen"
                            },
                            {
                                "min": 45,
                                "max": 55,
                                "color": "yellow"
                            },
                            {
                                "min": 55,
                                "max": 75,
                                "color": "lightRed"
                            },
                            {
                                "max": 100,
                                "color": "red",
                                "min": 75
                            }
                        ]
                    }
                },
                "lowerBound": 0,
                "decimalPlaces": 0,
                "upperBound": 100,
                "key": "HPT_RISK_PROB_AVG"
            },
            "HEALTH_SCORE": {
                "units": "PERCENT",
                "lowerBound": 0,
                "decimalPlaces": 0,
                "key": "HEALTH_SCORE",
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "max": 20,
                                "color": "red",
                                "min": 0
                            },
                            {
                                "max": 40,
                                "min": 20,
                                "color": "lightRed"
                            },
                            {
                                "min": 40,
                                "color": "yellow",
                                "max": 60
                            },
                            {
                                "color": "lightGreen",
                                "min": 60,
                                "max": 80
                            },
                            {
                                "color": "green",
                                "min": 80,
                                "max": 100
                            }
                        ]
                    }
                },
                "upperBound": 100
            },
            "OVERALL_METABOLIC_RISK_PROB": {
                "decimalPlaces": 0,
                "units": "PERCENT",
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "min": 0,
                                "color": "green",
                                "max": 25
                            },
                            {
                                "max": 45,
                                "color": "lightGreen",
                                "min": 25
                            },
                            {
                                "max": 55,
                                "min": 45,
                                "color": "yellow"
                            },
                            {
                                "color": "lightRed",
                                "min": 55,
                                "max": 75
                            },
                            {
                                "color": "red",
                                "min": 75,
                                "max": 100
                            }
                        ]
                    }
                },
                "lowerBound": 0,
                "upperBound": 100,
                "key": "OVERALL_METABOLIC_RISK_PROB"
            },
            "BP_SYSTOLIC": {
                "units": "MMHG",
                "lowerBound": 30,
                "key": "BP_SYSTOLIC",
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "color": "yellow",
                                "min": 45,
                                "max": 90
                            },
                            {
                                "min": 90,
                                "max": 120,
                                "color": "green"
                            },
                            {
                                "color": "lightGreen",
                                "min": 120,
                                "max": 130
                            },
                            {
                                "max": 140,
                                "min": 130,
                                "color": "yellow"
                            },
                            {
                                "max": 180,
                                "color": "red",
                                "min": 140
                            }
                        ]
                    }
                },
                "decimalPlaces": 0,
                "upperBound": 180
            },
            "TG_RISK_PROB_AVG": {
                "units": "PERCENT",
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "max": 25,
                                "color": "green",
                                "min": 0
                            },
                            {
                                "min": 25,
                                "max": 45,
                                "color": "lightGreen"
                            },
                            {
                                "max": 55,
                                "min": 45,
                                "color": "yellow"
                            },
                            {
                                "max": 75,
                                "color": "lightRed",
                                "min": 55
                            },
                            {
                                "max": 100,
                                "color": "red",
                                "min": 75
                            }
                        ]
                    }
                },
                "lowerBound": 0,
                "upperBound": 100,
                "decimalPlaces": 0,
                "key": "TG_RISK_PROB_AVG"
            },
            "TG_RISK_PROB": {
                "key": "TG_RISK_PROB",
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "min": 0,
                                "color": "green",
                                "max": 25
                            },
                            {
                                "min": 25,
                                "max": 45,
                                "color": "lightGreen"
                            },
                            {
                                "color": "yellow",
                                "max": 55,
                                "min": 45
                            },
                            {
                                "min": 55,
                                "color": "lightRed",
                                "max": 75
                            },
                            {
                                "min": 75,
                                "color": "red",
                                "max": 100
                            }
                        ]
                    }
                },
                "decimalPlaces": 0,
                "units": "PERCENT",
                "lowerBound": 0,
                "upperBound": 100
            },
            "VITAL_SCORE": {
                "scales": {
                    "default": {
                        "segments": [
                            {"min": 0,  "max": 30,  "color": "red"},
                            {"min": 30, "max": 50,  "color": "lightRed"},
                            {"min": 50, "max": 70,  "color": "yellow"},
                            {"min": 70, "max": 90,  "color": "lightGreen"},
                            {"min": 90, "max": 100, "color": "green"}
                        ]
                    }
                },
                "lowerBound": 0,
                "key": "VITAL_SCORE",
                "decimalPlaces": 0,
                "units": "PERCENT",
                "upperBound": 100
            },
            "BP_HEART_ATTACK": {
                "key": "BP_HEART_ATTACK",
                "decimalPlaces": 0,
                "units": "PERCENT",
                "upperBound": 33,
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "min": 0,
                                "max": 1.65,
                                "color": "green"
                            },
                            {
                                "min": 1.65,
                                "color": "lightGreen",
                                "max": 2.39
                            },
                            {
                                "min": 2.39,
                                "color": "yellow",
                                "max": 3.3
                            },
                            {
                                "color": "lightRed",
                                "min": 3.3,
                                "max": 6.6
                            },
                            {
                                "color": "red",
                                "min": 6.6,
                                "max": 33
                            }
                        ]
                    }
                },
                "lowerBound": 0
            },
            "MSI": {
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "max": 2,
                                "min": 1,
                                "color": "green"
                            },
                            {
                                "min": 2,
                                "color": "lightGreen",
                                "max": 3
                            },
                            {
                                "max": 4,
                                "color": "yellow",
                                "min": 3
                            },
                            {
                                "color": "lightRed",
                                "max": 5,
                                "min": 4
                            },
                            {
                                "max": 6,
                                "color": "red",
                                "min": 5
                            }
                        ]
                    }
                },
                "key": "MSI",
                "units": "",
                "upperBound": 5.9,
                "lowerBound": 1,
                "decimalPlaces": 1
            },
            "VITALITY": {
                "key": "VITALITY",
                "units": "",
                "upperBound": 5.9,
                "lowerBound": 1,
                "decimalPlaces": 1,
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "min": 1,
                                "color": "red",
                                "max": 2
                            },
                            {
                                "min": 2,
                                "max": 3,
                                "color": "lightRed"
                            },
                            {
                                "min": 3,
                                "color": "yellow",
                                "max": 4
                            },
                            {
                                "color": "lightGreen",
                                "min": 4,
                                "max": 5
                            },
                            {
                                "color": "green",
                                "min": 5,
                                "max": 6
                            }
                        ]
                    }
                },
                "hideWhenMissing": true
            },
            "SLEEP_QUALITY": {
                "key": "SLEEP_QUALITY",
                "units": "",
                "upperBound": 5.9,
                "lowerBound": 1,
                "decimalPlaces": 1,
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "min": 1,
                                "color": "red",
                                "max": 2
                            },
                            {
                                "min": 2,
                                "max": 3,
                                "color": "lightRed"
                            },
                            {
                                "min": 3,
                                "color": "yellow",
                                "max": 4
                            },
                            {
                                "color": "lightGreen",
                                "min": 4,
                                "max": 5
                            },
                            {
                                "color": "green",
                                "min": 5,
                                "max": 6
                            }
                        ]
                    }
                },
                "hideWhenMissing": true
            },
            "ANXIETY_INDEX": {
                "key": "ANXIETY_INDEX",
                "units": "",
                "upperBound": 5.9,
                "lowerBound": 1,
                "decimalPlaces": 1,
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "min": 1,
                                "color": "green",
                                "max": 2
                            },
                            {
                                "min": 2,
                                "max": 3,
                                "color": "lightGreen"
                            },
                            {
                                "min": 3,
                                "color": "yellow",
                                "max": 4
                            },
                            {
                                "color": "lightRed",
                                "min": 4,
                                "max": 5
                            },
                            {
                                "color": "red",
                                "min": 5,
                                "max": 6
                            }
                        ]
                    }
                },
                "hideWhenMissing": true
            },
            "SNR": {
                "decimalPlaces": 1,
                "units": "DECIBELS",
                "upperBound": 10,
                "scales": {},
                "lowerBound": 0,
                "key": "SNR"
            },
            "PHYSIO_SCORE": {
                "key": "PHYSIO_SCORE",
                "lowerBound": 0,
                "units": "PERCENT",
                "upperBound": 100,
                "scales": {
                    "default": {
                        "segments": [
                            {"min": 0,  "max": 30,  "color": "red"},
                            {"min": 30, "max": 50,  "color": "lightRed"},
                            {"min": 50, "max": 70,  "color": "yellow"},
                            {"min": 70, "max": 90,  "color": "lightGreen"},
                            {"min": 90, "max": 100, "color": "green"}
                        ]
                    }
                },
                "decimalPlaces": 0
            },
            "PHYSICAL_SCORE": {
                "key": "PHYSICAL_SCORE",
                "upperBound": 100,
                "lowerBound": 0,
                "decimalPlaces": 0,
                "units": "PERCENT",
                "scales": {
                    "default": {
                        "segments": [
                            {"min": 0,  "max": 30,  "color": "red"},
                            {"min": 30, "max": 50,  "color": "lightRed"},
                            {"min": 50, "max": 70,  "color": "yellow"},
                            {"min": 70, "max": 90,  "color": "lightGreen"},
                            {"min": 90, "max": 100, "color": "green"}
                        ]
                    }
                }
            },
            "BMI_CALC": {
                "decimalPlaces": 0,
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "min": 10,
                                "color": "yellow",
                                "max": 18.5
                            },
                            {
                                "color": "green",
                                "min": 18.5,
                                "max": 25
                            },
                            {
                                "color": "yellow",
                                "max": 30,
                                "min": 25
                            },
                            {
                                "color": "lightRed",
                                "max": 35,
                                "min": 30
                            },
                            {
                                "min": 35,
                                "color": "red",
                                "max": 60
                            }
                        ]
                    },
                    "030:female": {
                        "segments": [
                            {
                                "color": "yellow",
                                "max": 18.5,
                                "min": 10
                            },
                            {
                                "min": 18.5,
                                "max": 24,
                                "color": "green"
                            },
                            {
                                "min": 24,
                                "max": 28,
                                "color": "yellow"
                            },
                            {
                                "min": 28,
                                "max": 35,
                                "color": "red"
                            }
                        ]
                    },
                    "030:male": {
                        "segments": [
                            {
                                "color": "yellow",
                                "max": 18.5,
                                "min": 10
                            },
                            {
                                "min": 18.5,
                                "color": "green",
                                "max": 24
                            },
                            {
                                "min": 24,
                                "color": "yellow",
                                "max": 28
                            },
                            {
                                "color": "red",
                                "max": 35,
                                "min": 28
                            }
                        ]
                    }
                },
                "key": "BMI_CALC",
                "units": "KG_M2",
                "lowerBound": 10,
                "upperBound": 60
            },
            "HEIGHT": {
                "key": "HEIGHT",
                "lowerBound": 100,
                "upperBound": 220,
                "units": "CM",
                "decimalPlaces": 0
            },
            "WEIGHT": {
                "key": "WEIGHT",
                "lowerBound": 30,
                "upperBound": 300,
                "units": "KG",
                "decimalPlaces": 0
            },
            "WAIST_CIRCUM": {
                "key": "WAIST_CIRCUM",
                "units": "CM",
                "decimalPlaces": 0
            },
            "BP_DIASTOLIC": {
                "units": "MMHG",
                "upperBound": 120,
                "lowerBound": 30,
                "key": "BP_DIASTOLIC",
                "decimalPlaces": 0,
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "color": "yellow",
                                "min": 30,
                                "max": 60
                            },
                            {
                                "max": 70,
                                "min": 60,
                                "color": "green"
                            },
                            {
                                "color": "lightGreen",
                                "max": 80,
                                "min": 70
                            },
                            {
                                "min": 80,
                                "max": 90,
                                "color": "yellow"
                            },
                            {
                                "min": 90,
                                "color": "red",
                                "max": 120
                            }
                        ]
                    }
                }
            },
            "FLD_RISK_PROB": {
                "decimalPlaces": 0,
                "key": "FLD_RISK_PROB",
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "min": 0,
                                "color": "green",
                                "max": 25
                            },
                            {
                                "color": "lightGreen",
                                "min": 25,
                                "max": 45
                            },
                            {
                                "max": 55,
                                "color": "yellow",
                                "min": 45
                            },
                            {
                                "color": "lightRed",
                                "min": 55,
                                "max": 75
                            },
                            {
                                "min": 75,
                                "max": 100,
                                "color": "red"
                            }
                        ]
                    }
                },
                "lowerBound": 0,
                "upperBound": 100,
                "units": "PERCENT"
            },
            "DBT_RISK_PROB_AVG": {
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "color": "green",
                                "min": 0,
                                "max": 25
                            },
                            {
                                "color": "lightGreen",
                                "min": 25,
                                "max": 45
                            },
                            {
                                "min": 45,
                                "max": 55,
                                "color": "yellow"
                            },
                            {
                                "max": 75,
                                "min": 55,
                                "color": "lightRed"
                            },
                            {
                                "max": 100,
                                "color": "red",
                                "min": 75
                            }
                        ]
                    }
                },
                "decimalPlaces": 0,
                "key": "DBT_RISK_PROB_AVG",
                "units": "PERCENT",
                "lowerBound": 0,
                "upperBound": 100
            },
            "MFBG_RISK_PROB": {
                "units": "PERCENT",
                "lowerBound": 0,
                "key": "MFBG_RISK_PROB",
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "color": "green",
                                "min": 0,
                                "max": 25
                            },
                            {
                                "color": "lightGreen",
                                "min": 25,
                                "max": 45
                            },
                            {
                                "color": "yellow",
                                "max": 55,
                                "min": 45
                            },
                            {
                                "min": 55,
                                "max": 75,
                                "color": "lightRed"
                            },
                            {
                                "color": "red",
                                "max": 100,
                                "min": 75
                            }
                        ]
                    }
                },
                "upperBound": 100,
                "decimalPlaces": 0
            }
        }
    };

    const translations = {
        "APP_NAME": {
            "default": "MagicMirror™",
            "ko": "스마트 건강 거울",
            "zh": "智能健康魔镜"
        },
        "RESULTS_DISCLAIMER": {
            "default": `Health insights, wellness metrics, and condition likelihood assessments are intended for informational and wellness purposes only. These features are not intended to diagnose, treat, cure, mitigate, monitor, or prevent any disease or medical condition. The information provided by this solution is not a substitute for professional medical advice, diagnosis, or treatment. Users should consult a qualified healthcare professional regarding any medical concerns or healthcare decisions. Some results were predicted using AI/machine learning technology.`,
            "zh": `本产品/服务所提供的测量结果仅供一般健康认知及娱乐性用途参考，并非医疗用途。这些测量结果不构成医疗建议，亦不用于任何疾病的诊断、治疗、缓解、预防或治愈。用户不应依据这些结果作出任何医疗决定。对于测量结果的任何疑问或健康相关问题，用户应咨询具备资质的医疗保健专业人士。`
        },
        "SCREEN_RESULTS_SUBTITLE_VITALS": {
            "default": "Vitals",
            "ko": "활력",
            "zh": "生命体征"
        },
        "SCREEN_RESULTS_SUBTITLE_PHYSIOLOGICAL": {
            "default": "Physiological",
            "ko": "신진대사(생리학적)",
            "zh": "生理指标"
        },
        "SCREEN_RESULTS_SUBTITLE_PHYSICAL": {
            "default": "Physical",
            "ko": "신체점수",
            "zh": "身体指标"
        },
        "SCREEN_RESULTS_SUBTITLE_MENTAL": {
            "default": "Mental",
            "ko": "스트레스지수",
            "zh": "心理指标"
        },
        "SCREEN_RESULTS_SUBTITLE_GENERALRISKS": {
            "default": "Cardiovascular Event Likelihood Indices",
            "ko": "보편적 위험",
            "zh": "一般风险"
        },
        "SCREEN_RESULTS_SUBTITLE_OVERALL": {
            "default": "General Wellness Indices",
            "ko": "종합 보고서",
            "zh": "综合评分"
        },
        "SCREEN_RESULTS_SUBTITLE_METABOLICRISKS": {
            "default": "Metabolic Biomarker Likelihood Indices",
            "ko": "",
            "zh": "代谢风险"
        },
        "SCREEN_RESULTS_SUBTITLE_BLOODBIOMARKERS": {
            "default": "Blood Biomarkers Likelihood Indices",
            "ko": "",
            "zh": "血液生化标志物"
        },
        "DFXPOINT_UNIT:BPM": {
            "default": "bpm",
            "ko": "bpm",
            "zh": "bpm"
        },
        "DFXPOINT_UNIT:BRPM": {
            "default": "brpm",
            "ko": "brpm",
            "zh": "brpm"
        },
        "DFXPOINT_UNIT:MMHG": {
            "default": "mmHg",
            "ko": "mmHg",
            "zh": "mmHg"
        },
        "DFXPOINT_UNIT:MILLISECONDS": {
            "default": "ms",
            "ko": "ms",
            "zh": "ms"
        },
        "DFXPOINT_UNIT:DECIBELS": {
            "default": "dB",
            "ko": "dB",
            "zh": "dB"
        },
        "DFXPOINT_UNIT:SECONDS": {
            "default": "seconds",
            "ko": "초",
            "zh": "秒"
        },
        "DFXPOINT_UNIT:KG_M2": {
            "default": "kg/m²",
            "ko": "kg/m²",
            "zh": "kg/m²"
        },
        "DFXPOINT_UNIT:YEARS": {
            "default": "years",
            "ko": "살",
            "zh": "岁"
        },
        "DFXPOINT_UNIT:PERCENT": {
            "default": "%",
            "ko": "%",
            "zh": "%"
        },
        "DFXPOINT_UNIT:CM": {
            "default": "cm",
            "ko": "cm",
            "zh": "cm"
        },
        "DFXPOINT_UNIT:KG": {
            "default": "kg",
            "ko": "kg",
            "zh": "kg"
        },
        "DFXPOINT_UNIT:CELSIUS": {
            "default": "°C",
            "ko": "°C",
            "zh": "°C"
        },
        "DFXPOINT_TITLE:SNR": {
            "default": "SNR",
            "ko": "신호 대 잡음비",
            "zh": "信噪比"
        },
        "DFXPOINT_TITLE:HR_BPM": {
            "default": "Pulse Rate",
            "ko": "맥박수",
            "zh": "心率"
        },
        "DFXPOINT_TITLE:IHB_COUNT": {
            "default": "Irregular Heartbeats",
            "ko": "불규칙한 심장 박동",
            "zh": "不规则心跳"
        },
        "DFXPOINT_TITLE:BR_BPM": {
            "default": "Breathing Rate",
            "ko": "호흡수",
            "zh": "呼吸"
        },
        "DFXPOINT_TITLE:BP_SYSTOLIC": {
            "default": "Systolic Blood Pressure",
            "ko": "수축기 혈압",
            "zh": "收缩压"
        },
        "DFXPOINT_TITLE:BP_DIASTOLIC": {
            "default": "Diastolic Blood Pressure",
            "ko": "이완기 혈압",
            "zh": "舒张压"
        },
        "DFXPOINT_TITLE:BP": {
            "default": "Blood Pressure",
            "ko": "혈압",
            "zh": "血压"
        },
        "DFXPOINT_TITLE:TEMPERATURE_SENSOR": {
            "default": "Body Temperature",
            "ko": "체온",
            "zh": "体温"
        },
        "DFXPOINT_TITLE:HRV_SDNN": {
            "default": "Heart Rate Variability",
            "ko": "심박 변이도 (HRV)",
            "zh": "心率变异性"
        },
        "DFXPOINT_TITLE:BP_RPP": {
            "default": "Cardiac Workload",
            "ko": "심장 운동량",
            "zh": "心脏负荷"
        },
        "DFXPOINT_TITLE:BP_TAU": {
            "default": "Vascular Capacity",
            "ko": "혈관 건강",
            "zh": "血管容量"
        },
        "DFXPOINT_TITLE:MSI": {
            "default": "Mental Stress Index",
            "ko": "스트레스 지수",
            "zh": "精神压力指数"
        },
        "DFXPOINT_TITLE:VITALITY": {
            "default": "Vitality Index",
            "zh": "活力指数"
        },
        "DFXPOINT_TITLE:SLEEP_QUALITY": {
            "default": "Sleep Quality Index",
            "zh": "睡眠质量指数"
        },
        "DFXPOINT_TITLE:ANXIETY_INDEX": {
            "default": "Anxiety Index",
            "zh": "焦虑指数"
        },
        "DFXPOINT_TITLE:BMI_CALC": {
            "default": "Body Mass Index",
            "ko": "체질량 지수",
            "zh": "体重指数BMI"
        },
        "DFXPOINT_TITLE:AGE": {
            "default": "Facial Skin Age",
            "ko": "피부 나이",
            "zh": "皮肤年龄"
        },
        "DFXPOINT_TITLE:AGE_CVM": {
            "default": "Cardiovascular Metabolic Age",
            "zh": "心血管代谢年龄"
        },
        "DFXPOINT_TITLE:WAIST_TO_HEIGHT": {
            "default": "Waist-to-Height Ratio",
            "ko": "허리둘레-신장 비율",
            "zh": "腰围身高比"
        },
        "DFXPOINT_TITLE:ABSI": {
            "default": "Body Shape Index",
            "ko": "체형 지수",
            "zh": "体型指数"
        },
        "DFXPOINT_TITLE:HEIGHT": {
            "default": "Estimated Height",
            "ko": "높이",
            "zh": "预测身高"
        },
        "DFXPOINT_TITLE:WEIGHT": {
            "default": "Estimated Weight",
            "ko": "무게",
            "zh": "预测体重"
        },
        "DFXPOINT_TITLE:WAIST_CIRCUM": {
            "default": "Waist Circumference",
            "ko": "허리 둘레",
            "zh": "腰围"
        },
        "DFXPOINT_TITLE:CVD_MULTI_YEAR_RISK_PROBS": {
            "default": "Multi-year Cardiovascular Disease Risk",
            "zh": "多年心血管疾病风险"
        },
        "DFXPOINT_CVD_YEAR_LABEL": {
            "default": "{year}-year likelihood",
            "zh": "{year}年风险"
        },
        "DFXPOINT_CVD_YEAR_SLIDER_LABEL": {
            "default": "Cardiovascular disease risk prediction year",
            "zh": "心血管疾病风险预测年限"
        },
        "DFXPOINT_TITLE:BP_CVD": {
            "default": "Cardiovascular Disease Likelihood Index",
            "ko": "심혈관 질환 위험",
            "zh": "心血管疾病风险"
        },
        "DFXPOINT_TITLE:BP_CVD:OVERALL": {
            "default": "Cardiovascular Event Likelihood Index",
            "zh": "心血管事件风险指数"
        },
        "DFXPOINT_TITLE:BP_HEART_ATTACK": {
            "default": "Heart Attack Likelihood Index",
            "ko": "심장마비 위험",
            "zh": "心脏病风险"
        },
        "DFXPOINT_TITLE:BP_STROKE": {
            "default": "Stroke Likelihood Index",
            "ko": "뇌졸중 위험",
            "zh": "中风风险"
        },
        "DFXPOINT_TITLE:HPT_RISK_PROB": {
            "default": "Hypertension Likelihood Index",
            "zh": "高血压风险"
        },
        "DFXPOINT_TITLE:DBT_RISK_PROB": {
            "default": "Type 2 Diabetes Likelihood Index",
            "zh": "2型糖尿病风险"
        },
        "DFXPOINT_TITLE:HDLTC_RISK_PROB": {
            "default": "Hypercholesterolemia Likelihood Index",
            "zh": "高胆固醇血症风险"
        },
        "DFXPOINT_TITLE:TG_RISK_PROB": {
            "default": "Hypertriglyceridemia Likelihood Index",
            "zh": "高甘油三酯血症风险"
        },
        "DFXPOINT_TITLE:FLD_RISK_PROB": {
            "default": "Fatty Liver Disease Likelihood Index",
            "zh": "脂肪肝风险"
        },
        "DFXPOINT_TITLE:OVERALL_METABOLIC_RISK_PROB": {
            "default": "Overall Metabolic Biomarker Index",
            "zh": "整体代谢健康风险"
        },
        "DFXPOINT_TITLE:OVERALL_METABOLIC_RISK_PROB:OVERALL": {
            "default": "Metabolic Biomarker Likelihood Index",
            "zh": "代谢生物标志物风险指数"
        },
        "DFXPOINT_TITLE:HBA1C_RISK_PROB": {
            "default": "Elevated Hemoglobin A1C Likelihood Index",
            "zh": "糖化血红蛋白水平高于5.7%的风险"
        },
        "DFXPOINT_TITLE:MFBG_RISK_PROB": {
            "default": "Elevated Fasting Blood Glucose Likelihood Index",
            "zh": "空腹血糖水平高于5.5mmol/L的风险"
        },
        "DFXPOINT_TITLE:HEALTH_SCORE": {
            "default": "General Wellness Score",
            "ko": "종합 건강 지수",
            "zh": "综合健康评分"
        },
        "DFXPOINT_TITLE:VITAL_SCORE": {
            "default": "Vitals Index",
            "ko": "활력",
            "zh": "生命体征"
        },
        "DFXPOINT_TITLE:PHYSIO_SCORE": {
            "default": "Physiological Index",
            "ko": "신진대사(생리학적)",
            "zh": "生理指标"
        },
        "DFXPOINT_TITLE:MENTAL_SCORE": {
            "default": "Mental Index",
            "ko": "스트레스지수",
            "zh": "心理指标"
        },
        "DFXPOINT_TITLE:PHYSICAL_SCORE": {
            "default": "Physical Index",
            "ko": "신체점수",
            "zh": "身体指标"
        },
        "DFXPOINT_TITLE:RISKS_SCORE": {
            "default": "Risks",
            "ko": "위험요소",
            "zh": "疾病风险"
        },
        "DFXPOINT_DESC:STAR_RATING": {
            "default": `### What do the stars mean?

{APP_NAME} uses a 5-star rating system to let you know the quality of your measurement based on the lighting conditions that illuminate your face.

#### ★ ★ ★ ★ ★ 4 - 5 stars

Good lighting conditions. You have well lit conditions and the light is spread evenly (i.e. no shadows) across your face.

#### ★ ★ ★ ☆ ☆ 2 - 3 stars

Adequate light conditions. The light on your face is sufficient enough (i.e. not too low) and spread evenly enough across your face.

#### ★ ☆ ☆ ☆ ☆ 1 star

Poor lighting conditions. The light on your face is too low and uneven or there was too much movement after the measurement started.`,
            "zh": `### 五星评级代表什么？

这个评级代表您的测量质量。

{APP_NAME}的五星评级系统是通过评价光线照在面部的情况，从而显示您的测量质量。

#### ★ ★ ★ ★ ★ 4 – 5 颗星

良好的光照条件。光线在面部上均匀地分布 (没有阴影)。

#### ★ ★ ★ ☆ ☆ 2 – 3 颗星

合格的光照条件。 面部光线合格 (即不太暗)，并且比较均匀地分布在您的脸上。

#### ★ ☆ ☆ ☆ ☆ 1 颗星

不合格的光照条件。 面部太暗，光线不均匀或测量过程中出现晃动。`
        },
        "DFXPOINT_DESC:STRESS_STATE": {
            "default": `State`,
            "zh": `状态`
        },
        "DFXPOINT_DESC:HR_TITLE_1": {
            "default": `Below Normal Range - Resting Heart Rate`,
            "zh": `低于正常范围－静息心率`
        },
        "DFXPOINT_DESC:HR_TITLE_2": {
            "default": `Normal Range - Resting Heart Rate`,
            "zh": `正常范围—静息心率`
        },
        "DFXPOINT_DESC:HR_TITLE_3": {
            "default": `Above Normal Range - Resting Heart Rate`,
            "zh": `高于正常范围－静息心率`
        },
        "DFXPOINT_DESC:HR_1": {
            "default": `An unusually high or low resting heart rate may be an indicator of an underlying problem. Consult a medical professional if you're not a trained athlete and your resting heart rate is below 60 beats per minute (bpm) - especially if you have other signs or symptoms such as fainting, dizziness or shortness of breath.

Resting heart rate can be influenced by many factors, including, but not limited to, the following:

- Fitness level
- Age
- Cardiovascular disease
- Smoking
- Medications
- Body position (e.g. standing, sitting or lying down)

If you are concerned about your resting heart rate or have further questions, please consult with a medical professional.

For additional information on resting heart rate, see Mayo Clinic's "[What's a normal resting heart rate?](https://www.mayoclinic.org/healthy-lifestyle/fitness/expert-answers/heart-rate/faq-20057979#:~:text=A%20normal%20resting%20heart%20rate%20for%20adults%20ranges%20from%2060,to%2040%20beats%20per%20minute.)" or the American Heart Association's "[Know Your Target Heart Rates for Exercise, Losing Weight and Health](https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates)" and "[All About Heart Rate (Pulse)](https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure/all-about-heart-rate-pulse)".`,
            "zh": `不正常的心率偏高或偏低可能预示潜在的问题。如果你不是经过训练的专业运动员并且你的心率低于每分钟60次 (bpm)，特别是当有其它症状 (例如头昏、晕眩、呼吸急促等) 同时发生时，请咨询专业医生。

静息心率会被很多因素影响，其中包括但不限于如下因素：

- 健康水平
- 年龄
- 心血管疾病
- 吸烟
- 服用药物
- 身体姿势 (比如站立、坐下或躺着)

如果你对你的静息心率有疑问或想了解等多信息，请咨询专业医生。

关于静息心率的更多资料，可参考梅奥诊所的文章"[什么是正常的静息心率](https://www.mayoclinic.org/healthy-lifestyle/fitness/expert-answers/heart-rate/faq-20057979#:~:text=A%20normal%20resting%20heart%20rate%20for%20adults%20ranges%20from%2060,to%2040%20beats%20per%20minute.)"、美国心脏学会的文章"[了解你锻炼、减重和健康的心率目标](https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates)" 以及"[关于心率 (脉搏) 的一切](https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure/all-about-heart-rate-pulse)"。`
        },
        "DFXPOINT_DESC:HR_2": {
            "default": `A range of 60 to 100 beats per minute (bpm) is considered a normal range for an adult's resting heart rate.

Resting heart rate can be influenced by many factors, including, but not limited to, the following:

- Fitness level
- Age
- Cardiovascular disease
- Smoking
- Medications
- Body position (e.g. standing, sitting or lying down)

In general, a lower resting heart rate is indicative of more efficient heart function and better cardiovascular fitness. Athletes can have a normal resting heart rate below 60 bpm with some having resting heart rates closer to 40 bpm.

If you are concerned about your resting heart rate or have further questions, please consult with a medical professional.

For additional information on resting heart rate, see Mayo Clinic's "[What's a normal resting heart rate?](https://www.mayoclinic.org/healthy-lifestyle/fitness/expert-answers/heart-rate/faq-20057979#:~:text=A%20normal%20resting%20heart%20rate%20for%20adults%20ranges%20from%2060,to%2040%20beats%20per%20minute.)" or the American Heart Association's "[Know Your Target Heart Rates for Exercise, Losing Weight and Health](https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates)" and "[All About Heart Rate (Pulse)](https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure/all-about-heart-rate-pulse)".`,
            "zh": `成年人的静息心率 (RHR) 通常在每分钟60到100次 (bpm) 之间被视作是正常的。 静息心率会被很多因素影响，其中包括但不限于如下因素：

- 健康水平
- 年龄
- 心血管疾病
- 吸烟
- 服用药物
- 身体姿势 (比如站立、坐下或躺着)

通常情况下，较低的静息心率反映更加健康的心脏功能，同时也反映较低的心血管疾病风险。专业运动员的正常静息心率可能会低于60bpm，甚至接近40bpm。

如果你对你的静息心率有疑问或想了解等多信息，请咨询专业医生。

关于静息心率的更多资料，可参考梅奥诊所的文章"[什么是正常的静息心率](https://www.mayoclinic.org/healthy-lifestyle/fitness/expert-answers/heart-rate/faq-20057979#:~:text=A%20normal%20resting%20heart%20rate%20for%20adults%20ranges%20from%2060,to%2040%20beats%20per%20minute.)"、美国心脏学会的文章"[了解你锻炼、减重和健康的心率目标](https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates)" 以及"[关于心率（脉搏）的一切](https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure/all-about-heart-rate-pulse)"。`
        },
        "DFXPOINT_DESC:HR_3": {
            "default": `An unusually high or low resting heart rate may be an indicator of an underlying problem. Consult a medical professional  if your heart rate is consistently above 100 beats per minute (bpm) -  especially if you have other signs or symptoms such as fainting, dizziness or shortness of breath.

Resting heart rate can be influenced by many factors, including, but not limited to, the following:

- Fitness level
- Age
- Cardiovascular disease
- Smoking
- Medications
- Body position (e.g. standing, sitting or lying down)

If you are concerned about your resting heart rate or have further questions, please consult with a medical professional.

For additional information on resting heart rate, see Mayo Clinic's "[What's a normal resting heart rate?](https://www.mayoclinic.org/healthy-lifestyle/fitness/expert-answers/heart-rate/faq-20057979#:~:text=A%20normal%20resting%20heart%20rate%20for%20adults%20ranges%20from%2060,to%2040%20beats%20per%20minute.)" or the American Heart Association's "[Know Your Target Heart Rates for Exercise, Losing Weight and Health](https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates)" and "[All About Heart Rate (Pulse)](https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure/all-about-heart-rate-pulse)".`,
            "zh": `
不正常的心率偏高或偏低可能预示潜在的问题。如果你的心率持续高于每分钟100次 (bpm)，特别是当有其它症状 (例如头昏、晕眩、呼吸急促等) 同时发生时，请咨询专业医生。 静息心率会被很多因素影响，其中包括但不限于如下因素：

- 健康水平
- 年龄
- 心血管疾病
- 吸烟
- 服用药物
- 身体姿势 (比如站立、坐下或躺着)

如果你对你的静息心率有疑问或想了解等多信息，请咨询专业医生。

关于静息心率的更多资料，可参考梅奥诊所的文章"[什么是正常的静息心率](https://www.mayoclinic.org/healthy-lifestyle/fitness/expert-answers/heart-rate/faq-20057979#:~:text=A%20normal%20resting%20heart%20rate%20for%20adults%20ranges%20from%2060,to%2040%20beats%20per%20minute.)"、美国心脏学会的文章"[了解你锻炼、减重和健康的心率目标](https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates)" 以及"[关于心率（脉搏）的一切](https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure/all-about-heart-rate-pulse)"。`
        },
        "DFXPOINT_DESC:SNR": {
            "default": `The Signal to Noise Ratio (SNR) is a quality-metric that is calculated for every measurement. The SNR value reflects the relative strength of the extracted facial blood-flow ("signal") when assessed against the background ("noise"). It depends on many factors including sensor quality, lighting and motion conditions. SNR value for every measurement must exceed a validated threshold before the data is processed further by the DeepAffex Cloud.`,
            "zh": `信噪比（Signal to Noise Ratio，简称 SNR）是一项质量指标，每次测量时都会进行计算。该信噪比数值反映了提取到的面部血流（即 “信号”）相对于背景（即 “噪声”）的强度。它取决于多种因素，包括传感器质量、光照条件和运动状态。每次测量得到的信噪比数值必须超过经验证的阈值，DeepAffex 云平台才能对数据进行进一步处理。`
        },
        "DFXPOINT_DESC:BP_SYS": {
            "default": `Systolic blood pressure is the peak pressure in your brachial arteries during the contraction of your heart muscle, measured in millimetres of mercury (mmHg).

#### Systolic blood pressure levels in the USA:

According to the [American Heart Association and the American College of Cardiology](https://www.ahajournals.org/doi/10.1161/HYP.0000000000000065), high blood pressure (hypertension) is defined as the following:

|  | Systolic Blood Pressure (mmHg) |
|---|---|
| Normal | < 120 |
| Elevated | 120 - 129 |
| Hypertension | ≥ 130 |

#### Systolic blood pressure levels elsewhere:

According to the [European Society of Cardiology and the European Society of Hypertension](https://academic.oup.com/eurheartj/article/39/33/3021/5079119), high blood pressure (hypertension) is defined as the following:

|  | Systolic Blood Pressure (mmHg) |
|---|---|
| Optimal | < 120 |
| Normal | 120 - 129 |
| High Normal | 130 - 139 |
| Hypertension | ≥ 140 |

#### DISCLAIMER:

{APP_NAME} is not a medical device and should not be used for medical purposes. Always consult with your physician or other medical professional should you have any health-related question, issues or emergency.

#### Accuracy of blood pressure estimates:

In a study published in the [American Heart Association journal – Circulation: Cardiovascular Imaging (Vol. 12, No. 8)](https://www.ahajournals.org/doi/10.1161/CIRCIMAGING.119.008857) the proprietary technique used by {APP_NAME} called Transdermal Optical Imaging (TOI) has been shown to measure blood pressure with an average overall accuracy of 95% over the following ranges:

-   Systolic: 100 - 139 mmHg
-   Diastolic: 60 – 89 mmHg`,
            "zh": `收缩压是心肌收缩时肱动脉的峰值压力，单位为毫米汞柱（mmHg）。

#### 中国收缩压分类标准：

《中国高血压防治指南（2024年修订版）》对诊室高血压的分类标准如下：

|  | 收缩压 (mmHg) |
|--|--|
| 正常 | < 120 |
| 升高 | 120 - 139 |
| 高血压 |≥ 140 |

#### 其他地区收缩压标准:

[美国心脏协会和美国心脏病学会](https://www.ahajournals.org/doi/10.1161/HYP.0000000000000065)对高血压定义如下：

|  | 收缩压 (mmHg) |
|--|--|
| 正常 | < 120 |
| 升高 | 120 - 129 |
| 高血压 |≥ 130 |

[欧洲心脏病学会和欧洲高血压学会](https://academic.oup.com/eurheartj/article/39/33/3021/5079119)对高血压定义如下：

|  | 收缩压(mmHg) |
|--|--|
| 最佳 | < 120 |
| 正常 | 120 - 129 |
| 高于正常 | 130 - 139 |
| 高血压 | ≥ 140 |

#### 免责声明：

{APP_NAME}不是医疗器械，不应用于医疗目的。如果您有任何与健康相关的问题、问题或紧急情况，请始终咨询您的医生或其他医疗专业人员。

#### 血压测量的准确度：

在一篇发表在[在一篇发表在美国心脏协会期刊《循环：心血管成像》（第12卷，第8期）](https://www.ahajournals.org/doi/10.1161/CIRCIMAGING.119.008857)的研究报告中显示，{APP_NAME}使用其独有的技术----血谱光学成像（TOI）已被证明在以下范围内测量血压的平均总准确度为95%：

-   收缩压: 100-139 mmHg
-   舒张压: 60-89 mmHg`
        },
        "DFXPOINT_DESC:BP_DIA": {
            "default": `Diastolic blood pressure is the amount of pressure in your brachial arteries when your heart muscle is relaxed, measured in millimetres of mercury (mmHg).

#### Diastolic blood pressure levels in the USA:

According to the [American Heart Association and the American College of Cardiology](https://www.ahajournals.org/doi/10.1161/HYP.0000000000000065), high blood pressure (hypertension) is defined as the following:

|  | Diastolic Blood Pressure (mmHg) |
|--|--|
| Normal | < 80 |
| Hypertension | ≥ 80 |

#### Diastolic blood pressure levels elsewhere:

According to the [European Society of Cardiology and the European Society of Hypertension](https://academic.oup.com/eurheartj/article/39/33/3021/5079119), high blood pressure (hypertension) is defined as the following:

|  | Diastolic Blood Pressure (mmHg) |
|--|--|
| Optimal | < 80 |
| Normal | 80 - 84 |
| High Normal | 85 - 89 |
| Hypertension | ≥ 90 |

#### DISCLAIMER:

{APP_NAME} is not a medical device and should not be used for medical purposes. Always consult with your physician or other medical professional should you have any health-related question, issues or emergency.

#### Accuracy of blood pressure estimates:

In a study published in the [American Heart Association journal – Circulation: Cardiovascular Imaging (Vol. 12, No. 8)](https://www.ahajournals.org/doi/10.1161/CIRCIMAGING.119.008857) the proprietary technique used by {APP_NAME} called Transdermal Optical Imaging (TOI) has been shown to measure blood pressure with an average overall accuracy of 95% over the following ranges:

-   Systolic: 100 - 139 mmHg
-   Diastolic: 60 – 89 mmHg`,
            "zh": `舒张压是指当心肌放松时肱动脉的压力值，单位为毫米汞柱（mmHg）。

#### 中国舒张压标准：

《中国高血压防治指南（2024年修订版）》对诊室高血压的分类标准如下：

|  | 舒张压 (mmHg) |
|--|--|
| 最佳 | < 80 |
| 正常 | 80 - 89 |
| 高血压 | ≥ 90 |


#### 其他地区舒张压标准:

[美国心脏协会和美国心脏病学会](https://www.ahajournals.org/doi/10.1161/HYP.0000000000000065)对高血压定义如下：

|  | 舒张压 (mmHg) |
|--|--|
| 正常 | < 80 |
| 高血压 | ≥ 80 |

[欧洲心脏病学会和欧洲高血压学会](https://academic.oup.com/eurheartj/article/39/33/3021/5079119)对高血压定义如下：

|  | 舒张压 (mmHg) |
|--|--|
| 最佳 | < 80 |
| 正常 | 80 - 84 |
| 高于正常 | 85 - 89 |
| 高血压 | ≥ 90 |

#### 免责声明：

{APP_NAME}不是医疗器械，不应用于医疗目的。如果您有任何与健康相关的问题、问题或紧急情况，请始终咨询您的医生或其他医疗专业人员。

#### 血压测量的准确度：

在一篇发表在 [美国心脏协会期刊《循环：心血管成像》（第12卷，第8期）](https://www.ahajournals.org/doi/10.1161/CIRCIMAGING.119.008857) 的研究报告中显示，{APP_NAME}使用其独有的技术----血谱光学成像（TOI）已被证明在以下范围内测量血压的平均总准确度为95%：

-   收缩压: 100-139 mmHg
-   舒张压: 60-89 mmHg`
        },
        "DFXPOINT_DESC:BMI": {
            "default": `Body Mass Index (BMI) is a measure of an individual’s tissue mass (muscle, fat, and bone) adjusted for height. It is a commonly used indicator of overall body fat and serves as a tool for categorizing individuals as being underweight, normal weight, overweight, or obese on the basis of health risk.

Body Mass Index is a fair predictor of cardiovascular diseases, type 2 diabetes, gallstones, and certain cancers. It is the one of the best anthropometric predictors of high-density lipoprotein (HDL) and triglyceride levels; these are important factors for cardio-metabolic diseases. It is also one of the best anthropometric predictors of uric acid levels (high uric acid levels contribute to gallstones). A limitation of Body Mass Index is that it cannot distinguish between fat and muscle mass and thus can be inaccurate in muscular individuals.

You can calculate your Body Mass Index using the formula:
BMI = weight (kg) / height (m²)

According to the **World Health Organization**:

| BMI | Weight Status |
| --- | --- |
| Below 18.5 | Underweight |
| 18.5-24.9 | Normal weight |
| 25.0-29.9 | Pre-obesity |
| 30.0-34.9 | Obesity Class I |
| 35.0-39.9 | Obesity Class II |
| 40 or above | Obesity Class III |

For more information, see: Zhou, W., Wang, Y., Gu, X., Feng, Z. P., Lee, K., Peng, Y., & Barszczyk, A. (2020) Importance of general adiposity, visceral adiposity and vital signs in predicting blood biomarkers using machine learning. _International Journal of Clinical Practice_, e13664.`,
            "zh": `体重指数（BMI）是评价人的组织质量（肌肉、脂肪和骨骼）与身高的的适应关系。它常用于反映全身的脂肪指标、并根据由此带来的健康风险将人分为体重过轻、正常、超重或肥胖。

体重指数是心血管疾病、II型糖尿病、胆结石和某些癌症的重要预测因子，同时它也是高密度脂蛋白（HDL）和甘油三酯水平的最佳预测因子之一；这些都是引发心脏代谢疾病的重要因素。它也是尿酸水平最好的人体测量预测因子之一（高尿酸水平会导致胆结石）。体重指数的一个局限性是，它不能区分脂肪和肌肉质量，因此在肌肉发达的人群中可能导致不准确。

体重指数的计算公式：

BMI=体重（kg）/身高²（m²）

中华人民共和国卫生部疾病控制司对体重指数的标准划分：

| BMI | 体重分类 |
|---|---|
| 低于18.5 | 体重不足 |
| 18.5-23.9 | 体重正常 |
| 24.0-27.9 | 超重 |
| 28及以上 | 肥胖 |

欲了解更多信息，请参阅：Zhou，W.，Wang，Y.，Gu，X.，Feng，Z.P.，Lee，K.，Peng，Y.和Barszczyk，A.（2020）“一般肥胖、内脏肥胖和生命体征在使用机器学习预测血液生物标记物中的重要性”《国际临床实践杂志》e13664。`
        },
        "DFXPOINT_DESC:SKINAGE": {
            "default": `Skin Age is an estimate of your age based on the condition of the surface of your face.

This estimation can be used as an indicator for your facial skin aging.

This estimation may be influenced by many factors such as fatigue level, the use of skincare or cosmetics products.

Video images taken in poor lighting conditions (e.g., backlighting, overhead lighting) may distort the estimation of your facial skin age.`,
            "zh": `面部皮肤年龄是根据面部表面状况来评估你的年龄。

这个评估值可以作为面部皮肤老化的指标。

这种评估可能会受到许多因素的影响，如你的疲劳程度、护肤品和化妆品的使用等。

在不好的照明条件下拍摄的视频图像 (例如背光、头顶照明) 可能会严重影响皮肤年龄的评估。`
        },
        "DFXPOINT_DESC:CARDIACWORKLOAD": {
            "default": `Cardiac Workload, or more precisely myocardial workload, is a measure of the stress put on the heart muscle.

Cardiac Workload can be calculated using the formula: Heart Rate x Systolic Blood Pressure.

When measured at rest, this index can be used as an indicator of cardiovascular health.

For example, a person who exercises regularly may have lower Cardiac Workload than another person who has a sedentary lifestyle. During intense physical exercise, your Cardiac Workload may increase but should decrease post-exercise.`,
            "zh": `心脏负荷，或者更准确地说是心肌负荷，是对心肌压力的测量。

心脏负荷可用以下公式计算：
心率x收缩压。在静息状态下测量时，该指数可作为心血管健康的指标。

例如，通常情况下，一个经常锻炼的人可能比另一个久坐不动的人应该有更低的心脏负荷。你的心脏负荷应该在剧烈运动时增加，但在运动结束后降低。`
        },
        "DFXPOINT_DESC:CVD_RISK": {
            "default": `Cardiovascular Disease Risk is your likelihood of experiencing your first heart attack or stroke within the next 10 years, expressed as a percentage.

This risk score considers your gender, age, Body Mass Index, systolic blood pressure and antihypertensive medication status, as well as your smoking status and diabetes status when available. It was developed using the Framingham method. It is based on data from prospective studies that followed participants' cardiovascular health for over 10 years.`,
            "zh": `心血管疾病风险是指您在未来10年内发生第一次心脏病发作或中风的可能性，以百分比表示。

此风险评估包含对您的性别、年龄、体重指数、收缩压和使用抗高血压药物状况的考量，以及您的吸烟状况和糖尿病状况（如有）。它是用弗雷明翰方法（Framingham）、基于对参与者心血管健康进行了10年以上的前瞻性研究的数据开发的。`
        },
        "DFXPOINT_DESC:HEART_ATTACK_RISK": {
            "default": `Heart Attack Risk is your likelihood of experiencing your first heart attack within the next 10 years, expressed as a percentage.

This risk score considers your gender, age, Body Mass Index, systolic blood pressure and antihypertensive medication status, as well as your smoking status and diabetes status when available. It was developed using the Framingham method. It is based on data from prospective studies that followed participants' cardiovascular health for over 10 years.`,
            "zh": `心脏病风险是指您在未来10年内发生首次心脏病发作的可能性，以百分比表示。

此风险评估包含对您的性别、年龄、体重指数、收缩压和使用抗高血压药物状况的考量，以及您的吸烟状况和糖尿病状况（如有）。它是用弗雷明翰方法（Framingham）、基于对参与者心血管健康进行了10年以上的前瞻性研究的数据开发的。`
        },
        "DFXPOINT_DESC:STROKE_RISK": {
            "default": `Stroke Risk is your likelihood of experiencing your first stroke within the next 10 years, expressed as a percentage.

This risk score considers your gender, age, Body Mass Index, systolic blood pressure and antihypertensive medication status, as well as your smoking status and diabetes status (males only) when available. It was developed using the Framingham method. It is based on data from prospective studies that followed participants' cardiovascular health for over 10 years.`,
            "zh": `中风风险是您在未来10年内首次中风的可能性，以百分比表示。

此风险评分考虑您的性别、年龄、体重指数、收缩压和抗高血压药物状态，以及您的吸烟状态和糖尿病状态（仅限男性）。它是用弗雷明翰方法（Framingham）、基于对参与者心血管健康进行了10年以上的前瞻性研究的数据开发的。`
        },
        "DFXPOINT_DESC:VITAL_SCORE": {
            "default": `Vitals Index is a measure of your cardiovascular health. The index is calculated from the combination of:

- Heart Rate
- Systolic Blood Pressure
- Diastolic Blood Pressure
- Pulse Pressure

These measures are related to arterial stiffness and overall strain on the cardiovascular system. The higher your Vitals Index the better your cardiovascular health.`
        },
        "DFXPOINT_DESC:PHYSIO_SCORE": {
            "default": `Physiological Index is a measure of how efficiently your cardiovascular system is working. The index is calculated from the combination of:

- Heart Rate
- Systolic Blood Pressure
- Heart Rate Variability

These measures are related to how hard your heart is working along with the resiliency of your nervous system to maintain a healthy cardiovascular system. The higher the index, the more efficient your cardiovascular system is working.`
        },
        "DFXPOINT_DESC:MENTAL_SCORE": {
            "default": `Mental Stress Index is a snapshot measure of your mental stress based on your facial blood flow. Your facial blood flow pattern is linked to your sympathetic nervous system activity which drives the fight-or-flight response.

The higher the index, the less likely you are to be stressed.

**Notice:** Moment-to-moment fluctuations in the physiological blood flow means that the mental stress index could vary to some degree from one measurement to the next. Therefore, the best estimate of the mental stress index is obtained by averaging several measurements throughout the day and across several days to adequately account for this physiological variation.`
        },
        "DFXPOINT_DESC:PHYSICAL_SCORE": {
            "default": `Physical Index is a measure of your physical attributes. The index is calculated from the combination of:

- Body Mass Index (BMI)
- Waist-to-Height Ratio
- Body Shape Index

Your physical attributes contribute to your overall wellbeing. A higher index indicates a healthier physique.`
        },
        "DFXPOINT_DESC:HEALTH_SCORE": {
            "default": `General Wellness Score is a measure of your overall physiological health based on a combined calculation of your most essential vitals including:

- Heart rate
- Stress
- Blood Pressure
- Heart Rate Variability
- Body Mass Index
- Cardiac Workload
- Waist-to-height Ratio
- Body Shape Index
- Cardiovascular Disease Risks

The higher your General Wellness Score, the better your health.`,
            "zh": `综合健康评分是根据最基本的生命体征综合计算得出的生理健康指标，其中包括：

- 心率
- 压力
- 血压
- 不规则心跳
- 体重指数
- 腰围身高比
- 体型指数
- 心脏负荷
- 心血管疾病风险


通常情况下，你的综合健康评分越高，你的健康状况就越好。`
        },
        "DFXPOINT_DESC:BREATHING": {
            "default": `The normal resting breathing rate for adults is between 12 and 25 breaths per minute. A slower breathing rate may be caused by certain medications or suggest an underlying medical condition, for example, hypothyroidism, heart condition, electrolyte imbalance, etc. A faster breathing rate could have many causes including walking fast or exercise, asthma, anxiety, infection, or cardiovascular condition. You may want to consult your doctor if your breathing rate falls outside of the normal range.`,
            "zh": `成年人的正常静息呼吸频率为每分钟12到25次。呼吸速率减慢可能是由某些药物引起的，也可能是潜在的健康问题，例如甲状腺功能减退、心脏病、电解质失衡等。呼吸速率加快可能有许多原因，包括快走或运动、哮喘、焦虑、感染或心血管疾病。如果你的呼吸频率超出正常范围，您可能需要咨询您的医生。`
        },
        "DFXPOINT_DESC:IHB": {
            "default": `The number displayed is the number of irregular heartbeats {APP_NAME} detected in 30 seconds.

An irregular heartbeat is one that occurs outside of your heart's normal rhythm. The beat may have occurred sooner than expected or your heart may have seemed to 'skip' a beat. Sometimes it can feel like a thump in your chest, or the feeling that your heart is beating quickly or fluttering.

Irregular heartbeats are usually harmless. Most often they are triggered by things that increase adrenaline in the body like anxiety, caffeine, and nicotine.

In rare cases, they could indicate a more serious condition like an electrolyte imbalance or a heart condition. You should consult your doctor if you have a persistent irregular heartbeat. You should seek immediate medical attention if the onset of irregular heartbeats is combined with other symptoms of a heart problem like dizziness, chest pain, or shortness of breath.`,
            "zh": `显示结果是{APP_NAME}在30秒内检测出的不规则心跳次数。

不规则心跳是指发生在心脏正常节律之外的心跳。在这种情况下，有些心跳可能比预期的要早，或者错过了一个心跳。有的时候有胸口震动、心跳加速或心悸的感觉。

不规则心跳通常是无害的。大多数情况下，它们是由体内肾上腺素的增加而触发的，如焦虑、咖啡因和尼古丁。

但是，在极少数情况下，不规则的心跳可能表明严重的问题，如电解质失衡或心脏疾病。如果您有持续不规则的心跳，或者不规则心跳发生时有其它症状，如头晕、胸痛或呼吸短促，您应该咨询医生或立即就医。`
        },
        "DFXPOINT_DESC:HRV": {
            "default": `Heart Rate Variability refers to the variability in the timing between one heartbeat and the next. {APP_NAME} measures this with SDNN, which is the standard deviation of the interval between normal heartbeats (in milliseconds). A higher SDNN corresponds to more inter-beat variability.

Increased heart rate variability suggests an increase in parasympathetic activity and/or a decrease in sympathetic activity of the autonomic nervous system.

High resting heart rate variability is considered healthy and means that the heart is more flexible to the changing needs of the body.
`,
            "zh": `心率变异性(HRV)是指逐次心跳周期差异的变化情况。{APP_NAME}用SDNN来测量，SDNN是全部窦性心搏间期（简称NN间期）的标准差，单位为毫秒(ms) 。较高的SDNN对应较多的拍间变异性。

心率变异性增加表明副交感神经活动增加和/或自主神经系统交感神经活动减少。

较高的静息心率变异性被认为是健康的，意味着心脏对身体不断变化的需求更加灵活。`
        },
        "DFXPOINT_DESC:WATHR": {
            "default": `Waist-to-height ratio is an individual's waist circumference expressed as a percentage of their height (with both measured in the same units). For the average person, {APP_NAME} will estimate this to within 4 percentage points of its actual value.

Waist-to-height ratio is a particularly good predictor of cardiovascular disease risk. It is associated with cardiovascular disease risk factors like elevated total cholesterol and lower high-density lipoprotein (HDL).

On average, {APP_NAME} will estimate your waist-to-height ratio to within 4 percentage points of its actual value.

For more information, see: Zhou, W., Wang, Y., Gu, X., Feng, Z. P., Lee, K., Peng, Y., & Barszczyk, A. (2020) Importance of general adiposity, visceral adiposity and vital signs in predicting blood biomarkers using machine learning. _International Journal of Clinical Practice_, e13664.`,
            "zh": `腰围身高比WHR是一个人的腰围长度占身高长度的百分比来表示的数值（两者使用相同的长度单位）。这种脂肪与各种健康风险有关。

腰围身高比是心血管疾病风险的一个很好的预测因子，它与心血管疾病的风险因素如总胆固醇升高和高密度脂蛋白（HDL）降低有关。

平均来说，{APP_NAME}估计您的腰高比与实际值的误差不超过4%

欲了解更多信息，请参阅：Zhou，W.，Wang，Y.，Gu，X.，Feng，Z.P.，Lee，K.，Peng，Y.和Barszczyk，A.（2020）“一般肥胖、内脏肥胖和生命体征在使用机器学习预测血液生物标记物中的重要性”《国际临床实践杂志》e13664。`
        },
        "DFXPOINT_DESC:BSI": {
            "default": `Body Shape Index is a measure of abdominal region size (as determined by waist circumference) relative to overall body size (as determined by Body Mass Index and height). A low Body Shape Index corresponds to a ‘chilli pepper'-shaped body. As BSI increases, body shape resembles a pear, then a pineapple, and then an apple. A larger abdominal region suggests elevated levels of deep abdominal fat, which is associated with various health risks.

Body Shape Index is a particularly good predictor of mortality (from all causes), as well as a fair predictor of diabetes and cardiovascular diseases. It is associated with elevated triglyceride levels, which may partially contribute to the development of cardiovascular diseases.

For more information, see: Zhou, W., Wang, Y., Gu, X., Feng, Z. P., Lee, K., Peng, Y., & Barszczyk, A. (2020) Importance of general adiposity, visceral adiposity and vital signs in predicting blood biomarkers using machine learning. _International Journal of Clinical Practice_, e13664.`,
            "zh": `体型指数是衡量腹部（由腰围决定）相对于整体体型（由体重指数BMI和身高决定）的指标。低体型指数对应的是“辣椒”形身材。随着BSI的增加，身体形状像梨，进而是像菠萝，然后是苹果。较大的腹部表明腹部深层脂肪水平升高，这与各种健康风险有关。

体型指数是用于预测死亡率的所有因素中非常重要的一个，并且能比较准确的预测糖尿病和心血管疾病，它与影响心血管疾病的甘油三酯水平升高有关。

欲了解更多信息，请参阅：Zhou，W.，Wang，Y.，Gu，X.，Feng，Z.P.，Lee，K.，Peng，Y.和Barszczyk，A.（2020）“一般肥胖、内脏肥胖和生命体征在使用机器学习预测血液生物标记物中的重要性”《国际临床实践杂志》e13664。`
        },
        "DFXPOINT_DESC:HYPERTENSION_RISK": {
            "default": `Hypertension risk corresponds to the percentage of people with the user's risk profile who are diagnosed with hypertension (high blood pressure) by their doctor.

This risk profile is based on their facial blood flow and demographic information.

Hypertension is a major treatable risk factor for cardiovascular disease. Therefore, those with a high hypertension risk should consider getting screened for hypertension by their doctor.

**Notice**: Moment-to-moment fluctuations in your physiology mean that your risk estimates could vary to some degree from one measurement to the next. The best estimate of your overall risk is therefore obtained by averaging several measurements throughout the day and across several days to adequately account for this physiological variation.`,
            "zh": `高血压风险对应于用户风险特征为高血压（血压过高）已由其医生确诊的人群的百分比。

此风险特征基于其面部血流和人口统计信息。

高血压是心血管疾病中主要的可治疗风险。因此，高血压风险较高的人应考虑让医生对自己进行高血压筛查。

**注意**：您的生理状况在瞬间之间波动，这意味着您的风险估算可能会在某种程度上随一次测量而有所不同。 因此，可以通过对一天中和几天中的几次测量结果求平均来充分考虑这种生理变化，从而获得对您总体风险的最佳估计。`
        },
        "DFXPOINT_DESC:TYPE2_DIABETES": {
            "default": `Type 2 diabetes risk corresponds to the percentage of people with the user's risk profile who are diagnosed with type 2 diabetes (impaired processing of blood sugar) by their doctor.

This risk profile is based on their facial blood flow and demographic information. It does not necessarily reflect the user's current blood sugar level.

Uncontrolled type 2 diabetes can cause problems like vascular disease, heart disease, kidney damage, and nerve damage. Therefore, those with a high type 2 diabetes risk should consider getting screened for type 2 diabetes by their doctor.

**Notice**: Moment-to-moment fluctuations in your physiology mean that your risk estimates could vary to some degree from one measurement to the next. The best estimate of your overall risk is therefore obtained by averaging several measurements throughout the day and across several days to adequately account for this physiological variation.`,
            "zh": `2 型糖尿病风险对应于用户风险特征为 2 型糖尿病（血糖处理功能受损）已由其医生确诊的人群的百分比。

此风险特征基于其面部血流和人口统计信息。它不一定反映用户当前的血糖水平。

不受控制的 2 型糖尿病可能会引起多种问题，例如血管疾病、心脏疾病、肾脏损伤和神经损伤。因此，2 型糖尿病风险较高的人应考虑让医生对自己进行 2 型糖尿病筛查。

**注意**：您的生理状况在瞬间之间波动，这意味着您的风险估算可能会在某种程度上随一次测量而有所不同。 因此，可以通过对一天中和几天中的几次测量结果求平均来充分考虑这种生理变化，从而获得对您总体风险的最佳估计。`
        },
        "DFXPOINT_DESC:FLD_RISK_PROB": {
            "default": `Fatty Liver Disease Risk corresponds to the percentage of people with the subject's risk profile who are diagnosed with fatty liver disease. When the accumulation of fat in the liver exceeds 5% of its total mass, it is classified as fatty liver.

Fatty liver disease is characterized by the accumulation of triglyceride lipids within the liver cells, leading to an abnormal increase in liver size. Its development involves multiple contributing factors. These include excessive alcohol consumption, which impairs liver function and promotes the retention of fatty acids; metabolic syndrome, characterized by obesity and insulin resistance, which leads to the accumulation of fatty acids in the liver; and dietary factors such as high fructose intake, which contributes to the storage of excessive fat in liver cells. These factors collectively play a role in the development and progression of fatty liver disease.`,
            "zh": `脂肪肝风险对应于受试者风险特征为被诊断出患有脂肪肝的人群的百分比。当肝脏中的脂肪堆积超过总质量的 5% 时，就会被归类为脂肪肝。

脂肪肝的特征是甘油三酯类脂质在肝细胞内堆积，导致肝脏体积异常增大。脂肪肝的发展涉及多种诱因。其中包括：过量饮酒，这会损害肝脏功能并促进脂肪酸滞留；以肥胖和胰岛素抵抗为特征的代谢综合征，这会导致脂肪酸在肝脏中积累；以及饮食因素，例如，高果糖摄入量会导致肝细胞中储存过多脂肪。这些因素共同作用于脂肪肝的发生和发展。 `
        },
        "DFXPOINT_DESC:HYPERTRIGLYCERIDEMIA_RISK": {
            "default": `Hypertriglyceridemia risk corresponds to the percentage of people with the user's risk profile who have abnormally high triglyceride levels (above 1.7 mmol/L or 150 mg/dL).

This risk profile is based on their facial blood flow and demographic information.

Hypertriglyceridemia in combination with other factors is a treatable risk factor for cardiovascular disease. Therefore, those with a high hypertriglyceridemia risk should talk to their doctor about having their triglyceride levels checked with a blood test.

**Notice**: Moment-to-moment fluctuations in your physiology mean that your risk estimates could vary to some degree from one measurement to the next. The best estimate of your overall risk is therefore obtained by averaging several measurements throughout the day and across several days to adequately account for this physiological variation.`,
            "zh": `高甘油三酯血症风险对应于用户风险特征为甘油三酯水平异常偏高（超过 1.7 mmol/L 或 150 mg/dL）的人群的百分比。

此风险特征基于其面部血流和人口统计信息。

高甘油三酯血症与其他因素的组合属于心血管疾病中的可治疗风险。因此，高甘油三酯血症风险较高的人应与医生探讨通过验血来检查其甘油三酯水平。

**注意**：您的生理状况在瞬间之间波动，这意味着您的风险估算可能会在某种程度上随一次测量而有所不同。 因此，可以通过对一天中和几天中的几次测量结果求平均来充分考虑这种生理变化，从而获得对您总体风险的最佳估计。`
        },
        "DFXPOINT_DESC:HYPERCHOLESTEROLEMIA_RISK": {
            "default": `Hypercholesterolemia risk corresponds to the percentage of people with the user's risk profile who have abnormally high cholesterol levels (defined as a total cholesterol (TC)-to-high density lipoprotein (HDL) cholesterol (“good cholesterol”) ratio of 4.3 or higher).

This risk profile is based on their facial blood flow and demographic information.

Hypercholesterolemia is a treatable risk factor for cardiovascular disease. Therefore, those with a high hypercholesterolemia risk should talk to their doctor about having their HDL and total cholesterol levels checked with a blood test.

**Notice**: Moment-to-moment fluctuations in your physiology mean that your risk estimates could vary to some degree from one measurement to the next. The best estimate of your overall risk is therefore obtained by averaging several measurements throughout the day and across several days to adequately account for this physiological variation.`,
            "zh": `高胆固醇血症风险对应于用户风险特征为胆固醇异常偏高（定义为总胆固醇 (TC) 与高密度脂蛋白 (HDL) 胆固醇[“好胆固醇”]之比为 4.3 或更高）的人群的百分比。

此风险特征基于其面部血流和人口统计信息。

高胆固醇血症属于心血管疾病中的可治疗风险。因此，高胆固醇血症风险较高的人应与医生探讨通过验血来检查其 HDL 和总胆固醇水平。

**注意**：您的生理状况在瞬间之间波动，这意味着您的风险估算可能会在某种程度上随一次测量而有所不同。 因此，可以通过对一天中和几天中的几次测量结果求平均来充分考虑这种生理变化，从而获得对您总体风险的最佳估计。`
        },
        "DFXPOINT_DESC:OVERALL_METABOLIC_RISK_PROB": {
            "default": `Overall Metabolic Health Risk evaluation offers a comprehensive assessment of an individual's susceptibility to a spectrum of metabolic conditions. It utilizes information from facial blood flow measurements (TOI) and data about the individual's profile to measure and estimate the likelihood of certain health issues occurring.

The combination of the outlined risks—Hypertension Risk, Type 2 Diabetes Risk, Hypertriglyceridemia Risk, Hypercholesterolemia Risk, and Fatty Liver Disease Risk—forms a comprehensive image of an individual's metabolic health. Evaluated via facial blood flow (TOI) measurements and subject's profile data, these risks highlight the complex overlap between metabolic well-being and cardiovascular health.

The combined impact of these risks emphasizes the necessity for taking proactive steps in managing one's health. The potential emergence of high blood pressure, Type 2 diabetes, elevated triglyceride and cholesterol levels, or fatty liver disease emphasizes the significance of adopting healthier habits and seeking guidance from professionals. The combined impact of these risks has a broader influence that reaches into the area of potential heart-related problems and disorders that affect blood vessels, which can include a range of cardiovascular diseases.

**Notice:** Moment-to-moment fluctuations in the subject's physiology mean that their risk estimates could vary to some degree from one measurement to the next. Therefore, the best estimate of the subject's overall risk is obtained by averaging several measurements throughout the day and across several days to adequately account for this physiological variation.`,
            "zh": `整体代谢健康风险评估能够全面评估个人对一系列代谢疾病的易感性。它利用面部血流测量 (TOI) 信息和个人档案数据来测量和估计出现某些健康问题的可能性。

高血压风险、2 型糖尿病风险、高甘油三酯血症风险、高胆固醇血症风险和脂肪肝风险 — 这几项风险的组合构成了一个人代谢健康的综合状况。通过面部血流 (TOI) 测量和受试者的个人档案数据对这些风险进行评估，能够凸显新陈代谢健康与心血管健康之间复杂的重叠关系。

这些风险的综合影响强调了采取积极措施管理自身健康的必要性。高血压、2 型糖尿病、甘油三酯和胆固醇水平升高或脂肪肝等疾病出现的可能性，强调了养成更健康的生活习惯和寻求专业人士指导的重要性。这些风险的综合影响范围更广，涉及潜在的心脏相关问题和影响血管的疾病，包括各种心血管疾病。

**声明：**受试者的生理状况每时每刻都在波动，这意味着风险估计值在不同的测量中可能会有一定程度的差异。因此，对受试者总体风险的最佳估计是通过对全天和数天的多次测量取平均值，以充分考虑这种生理变化。`
        },
        "DFXPOINT_DESC:HBA1C_RISK_PROB": {
            "default": `HbA1c risk corresponds to the percentage of people with the user’s risk profile who had their HbA1c levels above 5.7% when tested, indicating an elevated risk of prediabetes.

Their risk profile is based on facial blood flow and demographics.

HbA1c or glycated hemoglobin is formed when glucose from the blood stream combines with hemoglobin in red blood cells. The HbA1c test is a laboratory blood test ordered by your health care provider. It estimates the average blood glucose level during the past 2-3 months by measuring the amount of glycated hemoglobin A1c in a person’s blood. The higher the A1c percentage, the higher the blood glucose levels, thus helping in the diagnosis of type 2 diabetes. There are other conditions and physiological states beyond just diabetes which may alter HbA1c values. Therefore, it is important to discuss the meaning of your readings with your health care provider and determine if further assessment is required.

**Notice:** Moment-to-moment fluctuations in your physiology mean that your risk estimates could vary to some degree from one measurement to the next. The best estimate of your overall risk is therefore obtained by averaging several measurements throughout the day and across several days to adequately account for this physiological variation.`,
            "zh": `糖化血红蛋白风险是指用户在测试时，具备和测试者相同风险状况且糖化血红蛋白水平高于5.7%的人的百分比，表明糖尿病前期风险升高。

他们的风险状况是基于面部血流和人口统计学的。

当来自血流的葡萄糖与红细胞中的血红蛋白结合时，形成糖化血红蛋白。糖化血红蛋白测试是一种医学实验室血液测试。它通过测量一个人血液中糖化血红蛋白的含量来估计过去2-3个 月的平均血糖水平。糖化血红蛋白百分比越高，血糖水平越高，因此有助于诊断2型糖尿病。除糖尿病外，还有其他条件和生理状态可能改变糖化血红蛋白值。因此，请与您的医生讨论检测数值的意义并确定是否需要进一步评估。

**注意：** 你生理上每时每刻的波动意味着你的风险估计可能在某种程度上因测量时间而不同。因此，通过对一天中和几天中的几次测量进行平均，可以获得对总体风险的最佳估计，以充分说明这种生理变化。`
        },
        "DFXPOINT_DESC:MFBG_RISK_PROB": {
            "default": `Fasting blood glucose risk corresponds to the percentage of people with the user's risk profile who had their blood glucose levels above 5.5 mmol/L when tested after 8-10 hours of fasting, indicating a high risk of prediabetes.

Their risk profile is based on facial blood flow and demographics.

Fasting blood glucose (FBG) test is a laboratory blood test ordered by your health care provider, performed after 8-10 hrs of fasting. This blood test is the most accurate way to determine a blood glucose result. FBG may also be determined using over the counter glucometers. These glucometers may produce FBG results that vary in accuracy by as much as +-15%. There are other conditions and physiological states beyond just diabetes which can alter FBG results. Therefore, it is important to discuss the meaning of your readings with your health care provider and determine if further assessment is required.

**Notice:**  Moment-to-moment fluctuations in your physiology mean that your risk estimates could vary to some degree from one measurement to the next. The best estimate of your overall risk is therefore obtained by averaging several measurements across several days to adequately account for this physiological variation.`,
            "zh": `空腹血糖风险是指在禁食8-10小时后进行测试时，血糖水平高于5.5 mmol/L的用户风险状况人群的百分比，表明糖尿病前期的高风险。

他们的风险状况是基于面部血流和人口统计学的。

空腹血糖（FBG）测试是一种医疗实验室血液测试，在禁食8-10小时后进行。这种血液测试是确定血糖结果最准确的方法。FBG也可使用血糖仪测定。这些血糖仪可产生FBG结果，其精确度变化一般在+-15%。除了糖尿病之外，还有其他身体状况和生理状态可以改变FBG结果。因此，请与您的医生讨论检测数值的意义并确定是否需要进一步评估。

**注意：** 你生理上的每时每刻的波动意味着你的风险估计可能在某种程度上因测量而不同。因此，通过对几天内的几次测量求平均值，以充分说明这种生理变化，可以获得对总体风险的最佳估计。`
        },
        "DFXPOINT_DESC:STRESS_TITLE_1": { "default": `Extremely Relaxed`, "zh": `非常放松` },
        "DFXPOINT_DESC:STRESS_TITLE_2": { "default": `Relaxed`, "zh": `放松` },
        "DFXPOINT_DESC:STRESS_TITLE_3": { "default": `Productive`, "zh": `高效` },
        "DFXPOINT_DESC:STRESS_TITLE_4": { "default": `Vigilant`, "zh": `警惕` },
        "DFXPOINT_DESC:STRESS_TITLE_5": { "default": `Overloaded`, "zh": `超载` },
        "DFXPOINT_DESC:STRESS_1": {
            "default": `- A well below normal stress results in a very low Stress Index that is ideal for maintaining good mental and physical health
- An Stress Index reading this low suggests the possibility that at this moment, you have nothing to worry about in your life or are in a state of deep relaxation
- However, you may also not be experiencing enough mental arousal to keep you alert in certain tasks. A minimum stress is useful while engaged with daily activities or chores

Just as your resting heart rate can vary constantly it is also normal for stress levels to change constantly. This is because your heart rate variability (HRV) is also changing constantly. As a result it is not unusual to experience variations in your Stress Index results by as much as 1.0 when you take consecutive measurements.`,
            "zh": `- 心理压力值 ”极低“ 表示你几乎没有心理压力，身心健康极佳
- 你可能处于生活无忧或深度放松的状态
- 但是，过于放松的心态可能使你有时无法集中足够的注意力从事日常活动，因为必要的压力是有正面作用的

正如静息心率 (RHR) 会持续变化一样，你的心理压力值在连续的测量中显示不同的结果也是正常现象，这是因为心率变异性 (HRV) 也是持续变化的。所以，当你连续测量时，心理压力值结果出现多至1.0的波动也并非异常现象。`
        },
        "DFXPOINT_DESC:STRESS_2": {
            "default": `- Your below normal stress reading results in a lower Stress Index that is beneficial for long term psychological and physical health
- Receiving Stress Index readings in this zone are most suitable for the home or leisure environments
- The ability to activate this lower level of mental arousal may facilitate concentration in difficult or unfamiliar tasks

Just as your resting heart rate can vary constantly it is also normal for stress levels to change constantly. This is because your heart rate variability (HRV) is also changing constantly. As a result it is not unusual to experience variations in your Stress Index results by as much as 1.0 when you take consecutive measurements.`,
            "zh": `- 心理压力值 "较低" 表示你有适当的心理压力，身心健康处于良好状态
- 这个状态是大多数人休息的时候应有的状态，同时也适宜处理一些简单的日常事务
- 有意识地增加心理压力有助于集中注意力去应对困难和挑战

正如静息心率 (RHR) 会持续变化一样，你的心理压力值在连续的测量中显示不同的结果也是正常现象，这是因为心率变异性 (HRV) 也是持续变化的。所以，当你连续测量时，心理压力值结果出现多至1.0的波动也并非异常现象。`
        },
        "DFXPOINT_DESC:STRESS_3": {
            "default": `- Currently, your normal stress results in a moderate Stress Index that is not considered harmful to your psychological and physical health.
- Most people work optimally having an Stress Index within this stress zone.
- However, if your stress remains within this zone under all situations, including moments of relaxation, then you may benefit from learning effective relaxation techniques

Just as your resting heart rate can vary constantly it is also normal for stress levels to change constantly. This is because your heart rate variability (HRV) is also changing constantly.   As a result it is not unusual to experience variations in your Stress Index results by as much as 1.0 when you take consecutive measurements.`,
            "zh": `- 心理压力值 "适中" 表示你有一定的心理压力，身心健康处于稳定状态
- 大多数人在此ASI区间会表现出最佳的工作状态
- 如果你在工作中保持此ASI状态并在休息时适当放松，将会受益匪浅

正如静息心率 (RHR) 会持续变化一样，你的心理压力值在连续的测量中显示不同的结果也是正常现象，这是因为心率变异性 (HRV) 也是持续变化的。所以，当你连续测量时，心理压力值结果出现多至1.0的波动也并非异常现象。`
        },
        "DFXPOINT_DESC:STRESS_4": {
            "default": `- Experiencing higher than normal stress resulting in a higher Stress Index that allows you to improve short term performance by boosting your motivation to do more difficult tasks, particularly those requiring stamina or persistence
- During exposure to this level of stress, you may experience mental or physical strain
- However, Stress Index readings in this zone should not be a constant part of your life. Otherwise, it may negatively affect your long term psychological and physical health outcomes

Just as your resting heart rate can vary constantly it is also normal for stress levels to change constantly. This is because your heart rate variability (HRV) is also changing constantly.   As a result it is not unusual to experience variations in your Stress Index results by as much as 1.0 when you take consecutive measurements.`,
            "zh": `- 心理压力值 "较高" 表示你有相当大的心理压力，并高度警觉
- 保持此ASI状态，你处理短期棘手的任务会非常高效
- 但是，不要让你的心理压力长期处于该状态，否则可能会对你的身心健康产生负面影响

正如静息心率 (RHR) 会持续变化一样，你的心理压力值在连续的测量中显示不同的结果也是正常现象，这是因为心率变异性 (HRV) 也是持续变化的。所以，当你连续测量时，心理压力值结果出现多至1.0的波动也并非异常现象。`
        },
        "DFXPOINT_DESC:STRESS_5": {
            "default": `- You are experiencing a significantly higher than normal stress indicated by a very high Stress Index meaning that you will likely encounter impaired performance on certain tasks due to higher than normal anxiety
- You may feel unable to calm yourself. Stop what you are doing and take slow, deep breaths. You should also avoid drinking caffeinated beverages like coffee
- Reducing the causes of your stress and engaging in calming activities may help restore your stress balance including practicing deep breathing, yoga, or meditation daily
- Be aware that prolonged periods of time spent experiencing such elevated Stress Index readings has the potential to cause health complications

Just as your resting heart rate can vary constantly it is also normal for stress levels to change constantly. This is because your heart rate variability (HRV) is also changing constantly.   As a result it is not unusual to experience variations in your Stress Index results by as much as 1.0 when you take consecutive measurements.`,
            "zh": `- 心理压力值 "极高" 表示你有巨大的心理压力，身心健康令人担忧
- 你可能处于极度焦虑的状态，无法让自己平静
- 建议你劳逸结合，保证充分的睡眠、多运动、多练习深呼吸、避免喝含咖啡因的饮料，尽量使自己放松。平静的生活有助于恢复心理压力的长期平衡，否则可能会导致多种健康问题

正如静息心率 (RHR) 会持续变化一样，你的心理压力值在连续的测量中显示不同的结果也是正常现象，这是因为心率变异性 (HRV) 也是持续变化的。所以，当你连续测量时，心理压力值结果出现多至1.0的波动也并非异常现象。`
        },
        "DFXPOINT_DESC:VASCULARAGE": {
            "default": `Vascular Age is an estimate of your age based on the condition of the blood flow characteristics beneath your facial skin.

This estimation can be used as an indicator for your facial vascular aging.`,
            "zh": `面部血管年龄是根据面部皮肤下面的血流特征来评估你的年龄。

这个评估值可以作为面部血管老化的指标。`
        },
        "DFXPOINT_DESC:VASCULARCAPACITY": {
            "default": `Vascular Capacity, or Tau, is a measure of the elasticity of your blood vessels.

Vascular Capacity can be calculated using the formula: R (Vascular Resistance) x C (Arterial Compliance).

When measured at rest, this index can be used as an indicator of cardiovascular health as it is strongly correlated with vascular stiffness.

A person with a high Tau has better vascular health than a person with a low Tau. Also, certain transient activities and physiological events can lead to immediate changes in Tau (e.g., drinking alcohol, smoking).`,
            "zh": `血管功能，或Tau，是衡量血管弹性的一个指标。

血管功能可用以下公式计算：
R (血管阻力) x C (动脉顺应性)。

在静息状态下测量时，该指数可作为心血管健康的一个指标，因为它与血管硬度密切相关。

通常情况下，Tau值高的人比Tau值低的人有更好的血管健康状况。此外，某些活动可导致Tau值立即发生变化 (例如饮酒、吸烟)。`
        },
        "DFXPOINT_DESC:AGE_CVM": {
            "default": `*Cardiovascular Metabolic Age* is an estimate of the subject's cardiovascular and metabolic health age, calculated using the subject's chronological age and health indicators derived from a facial blood flow (TOI) measurement.

Cardiovascular Metabolic Age is derived from a formula that combines the subject's chronological age with health indicators estimated from facial blood flow information captured using TOI. This estimate reflects several contributing factors, including cardiovascular disease risk; metabolic health risks such as hypertension, diabetes and pre-diabetes risk, hypercholesterolemia, and hypertriglyceridemia; cardiac health indicators such as cardiac workload and vascular capacity; and demographic information such as Body Mass Index.

Cardiovascular Metabolic Age compares the subject's overall cardiovascular and metabolic health with their chronological age. A subject with a healthier lifestyle, lower cardiovascular and metabolic risk, and better cardiac health is more likely to have a Cardiovascular Metabolic Age lower than their chronological age.

*There is no interpretation table for AGE_CVM.*`
        },
        "DFXPOINT_DESC:CVD_MULTI_YEAR_RISK_PROBS": {
            "default": `*Multi-year Cardiovascular Disease Risk* is the subject's likelihood of experiencing their first cardiovascular disease event within a selected time horizon from 1 to 20 years, expressed as a percentage. The result provides the corresponding cardiovascular disease risk for each year. Cardiovascular disease refers to conditions affecting the heart and blood vessels, such as heart attack and stroke. Multi-year Cardiovascular Disease Risk does not apply to subjects who have already had a heart attack or stroke.

## Background

This risk score is based on advanced machine learning and estimates the subject's likelihood of developing cardiovascular disease over a user-selected time window, from 1 year up to 20 years into the future.

Regardless of the selected year, the same interpretation scale applies to the reported result.`
        },
        "DFXPOINT_DESC:AGE": {
            "default": `Skin Age is an estimate of your age based on the condition of the surface of your face.
This estimate can be used as an indicator for subject's facial skin aging. It may be influenced by many factors such as fatigue level, the use of skincare or cosmetics products.

Video images taken in poor lighting conditions (e.g., back-lighting, overhead lighting) may distort the estimation of subject's facial skin age.

There is no interpretation table for AGE`
        },
        "DFXPOINT_DESC:HEIGHT": {
            "default": `*Estimated Height* is an estimate of the subject's height in centimetres.

*There is no interpretation table for HEIGHT.*`
        },
        "DFXPOINT_DESC:WEIGHT": {
            "default": `*Estimated Weight* is an estimate of the subject's weight in kilograms.

*There is no interpretation table for WEIGHT.*`
        },
        "DFXPOINT_DESC:WAIST_CIRCUM": {
            "default": `*Waist Circumference* is the subject's waist circumference in centimetres using the measurement's user profile information. It will be estimated if user profile information is not provided.

*There is no interpretation table for WAIST_CIRCUM.*`
        },
        "DFXPOINT_DESC:TEMPERATURE_SENSOR": {
            "default": `The temperature sensor collects readings from the upper forehead and neck areas. During the facial scan, the sensor will sample skin temperature from these facial regions approximately 4 times per second. The final displayed value represents the maximum temperature detected during the measurement process`,
            "zh": `温度传感器主要采集面部和颈部区域的温度，且优先捕捉该区域最高温；测量时，模块在有效检测距离内（室内 15-50cm），每秒约 4 次连续采集温度数据，最终显示的温度，是测量过程中所采集到的一系列温度中的最高值，保障测温精准。`
        },
        "DFXPOINT_DESC:VITALITY": {
            "default": `*Vitality Index* is a measure of an individual's cardiovascular health and overall vitality, and is presented on a 5-point scale, from poor (Level 1) to excellent (Level 5).

## Background

*Vitality Index* offers an assessment of an individual's cardiovascular health and overall vitality by integrating key physiological indicators. It incorporates cardiac workload, a widely recognized measure of the heart's oxygen demand and the stress placed upon it, reflecting the heart's pumping efficiency. The index also includes vascular capacity, which quantifies the adaptability and health of the blood vessels, indicating their ability to expand and contract to meet the body's varying blood flow needs. Furthermore, by integrating Body Mass Index, Heart Rate Variability, and Age, the Vitality Index accounts for crucial factors that significantly influence cardiovascular health and are indicative of overall physiological well-being. This multi-faceted approach provides a holistic view of an individual's cardiovascular vitality, highlighting areas of strength and potential concern.`,
            "zh": `## 定义

*活力指数*是一种用于衡量个体心血管健康状况与整体活力水平的指标，采用 5 分制评分，从健康状况不佳（1 级）到健康状况优异（5 级）不等。

## 背景

*活力指数*通过整合多项关键生理指标，实现对个体心血管健康及整体活力的综合评估。该指数纳入了心脏负荷这一指标 —— 心脏负荷是衡量心脏耗氧量与承受压力的公认指标，能够反映心脏的泵血效率；同时还纳入了血管容量指标，这一指标可量化血管的适应能力与健康状态，体现血管根据人体血流需求变化进行舒张与收缩的能力。此外，活力指数还结合了身体质量指数、心率变异性及年龄三项因素，这些均是对心血管健康具有重要影响、且能反映人体整体生理健康状态的关键指标。这种多维度评估方法，能够全面展现个体的心血管活力水平，清晰指出其健康优势与潜在隐患。`
        },
        "DFXPOINT_DESC:SLEEP_QUALITY": {
            "default": `*Sleep Quality Index* is a measure of the user's Sleep Quality that quantifies the Sleep Quality level on a 5-point scale, from poor sleep quality (Level 1) to excellent sleep quality (Level 5).

## Background

*Sleep Quality Index* is based on heart rate variability (HRV) features, specifically SDNN (standard deviation of NN intervals) and pNN50 (percentage of successive NN intervals that differ by more than 50ms), which are well-established indicators of autonomic nervous system activity and its role in sleep regulation. In conjunction with HRV, the Sleep Quality Index incorporates heart rate and blood pressure measurements, both of which are significantly influenced by sleep stages and overall sleep quality. By combining these parameters, the Sleep Quality Index offers a reflection of an individual's sleep, building upon existing research demonstrating strong correlations between these physiological features and various aspects of sleep quality.`,
            "zh": `## 定义

*睡眠质量指数*是一种用于衡量受试者睡眠质量的指标，采用 5 分制量化用户的睡眠质量等级，涵盖从睡眠质量差（1 级）到睡眠质量优（5 级）的区间。

## 背景

*睡眠质量指数*以心率变异性相关特征为核心基础，具体包括正常窦性心搏间期标准差（SDNN）与相邻正常窦性心搏间期差值大于 50 毫秒的百分比（pNN50）。这两项指标是评估自主神经系统活性的成熟指标，同时也与自主神经系统在睡眠调节中发挥的作用密切相关。除心率变异性指标外，睡眠质量指数还纳入了心率与血压两项测量数据 —— 这两项指标均会受到睡眠阶段与整体睡眠质量的显著影响。通过整合上述参数，睡眠质量指数能够客观反映个体的睡眠状况，其评估依据是已有研究中证实的 "这些生理特征与睡眠质量各维度存在高度相关性" 这一结论。`
        },
        "DFXPOINT_DESC:ANXIETY_INDEX": {
            "default": `*Anxiety Index* is a measure of an individual's underlying, long-range anxiety level and is presented on a 5-point scale, from excellent (Level 1) to poor (Level 5).

## Background

*Anxiety Index* is a combined physiological measure that estimates a person's long-term, baseline anxiety rather than short-term stress. It integrates heart rate, breathing rate, blood pressure, and heart rate variability signals linked to autonomic nervous system activity into a single score. By synthesizing these metrics, the index provides insight into chronic or trait-like anxiety and can be used to track underlying anxiety trends over time.`,
            "zh": `## 定义

*焦虑指数*是一种用于衡量个体潜在长期焦虑水平的指标，采用 5 分制评分，其中 1 级代表焦虑程度极低（状态良好），5 级代表焦虑程度极高（状态不佳）。

## 背景

*焦虑指数*是一项综合性生理评估指标，其评估对象是个体的长期基线焦虑水平，而非短期压力状态。该指数整合了与自主神经系统活性相关的四项生理信号：心率、呼吸频率、血压及心率变异性，并将这些信号转化为单一评分。通过综合分析上述各项指标，焦虑指数能够揭示个体的慢性焦虑或特质性焦虑状态，同时也可用于追踪个体潜在焦虑水平的长期变化趋势。`
        }
    };

    // Public API
    return {
        sections,
        translations,
        definitions
    };
})()
