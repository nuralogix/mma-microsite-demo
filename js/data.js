// data.js
const DeepAffexWebResultsData = (() => {
    const sections = [
        {
            "titleLocalizationKey": "SCREEN_RESULTS_SUBTITLE_VITALS",
            "pointsIDs": [
                "HR_BPM",
                "IHB_COUNT",
                "BR_BPM",
                "BP_SYSTOLIC",
                "BP_DIASTOLIC",
                "BODY_TEMPERATURE"
            ]
        },
        {
            "titleLocalizationKey": "SCREEN_RESULTS_SUBTITLE_PHYSIOLOGICAL",
            "pointsIDs": [
                "HRV_SDNN",
                "BP_RPP"
            ]
        },
        {
            "titleLocalizationKey": "SCREEN_RESULTS_SUBTITLE_MENTAL",
            "pointsIDs": [
                "MSI"
            ]
        },
        {
            "titleLocalizationKey": "SCREEN_RESULTS_SUBTITLE_PHYSICAL",
            "pointsIDs": [
                "AGE",
                "BMI_CALC",
                "ABSI",
                "WAIST_TO_HEIGHT"
            ]
        },
        {
            "titleLocalizationKey": "SCREEN_RESULTS_SUBTITLE_GENERALRISKS",
            "pointsIDs": [
                "BP_CVD",
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
        },
        {
            "titleLocalizationKey": "SCREEN_RESULTS_SUBTITLE_OVERALL",
            "pointsIDs": [
                "HEALTH_SCORE",
                "VITAL_SCORE",
                "PHYSIO_SCORE",
                "MENTAL_SCORE",
                "PHYSICAL_SCORE",
                "RISKS_SCORE"
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
                "units": "",
                "upperBound": 5,
                "lowerBound": 1,
                "decimalPlaces": 0,
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
            "BODY_TEMPERATURE": {
                "scales": {
                    "default": {
                        "segments": [
                            {
                                "color": "lightGreen",
                                "max": 36.5,
                                "min": 35
                            },
                            {
                                "min": 36.5,
                                "max": 37.5,
                                "color": "green"
                            },
                            {
                                "min": 38.3,
                                "max": 40,
                                "color": "yellow"
                            },
                            {
                                "min": 40,
                                "max": 41.5,
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
                "decimalPlaces": 1,
                "upperBound": 41.5,
                "key": "BODY_TEMPERATURE",
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
                "lowerBound": 1,
                "key": "VITAL_SCORE",
                "decimalPlaces": 0,
                "units": "",
                "upperBound": 5
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
                "lowerBound": 1,
                "units": "",
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
                "decimalPlaces": 0
            },
            "PHYSICAL_SCORE": {
                "key": "PHYSICAL_SCORE",
                "upperBound": 5,
                "lowerBound": 1,
                "decimalPlaces": 0,
                "units": "",
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
            "default": "General Risks",
            "ko": "보편적 위험",
            "zh": "一般风险"
        },
        "SCREEN_RESULTS_SUBTITLE_OVERALL": {
            "default": "Overall",
            "ko": "종합 보고서",
            "zh": "综合评分"
        },
        "SCREEN_RESULTS_SUBTITLE_METABOLICRISKS": {
            "default": "Metabolic Risks",
            "ko": "",
            "zh": "代谢风险"
        },
        "SCREEN_RESULTS_SUBTITLE_BLOODBIOMARKERS": {
            "default": "Blood Biomarkers",
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
        "DFXPOINT_TITLE:BODY_TEMPERATURE": {
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
        "DFXPOINT_TITLE:BP_CVD": {
            "default": "Cardiovascular Disease Risk",
            "ko": "심혈관 질환 위험",
            "zh": "心血管疾病风险"
        },
        "DFXPOINT_TITLE:BP_HEART_ATTACK": {
            "default": "Heart Attack Risk",
            "ko": "심장마비 위험",
            "zh": "心脏病风险"
        },
        "DFXPOINT_TITLE:BP_STROKE": {
            "default": "Stroke Risk",
            "ko": "뇌졸중 위험",
            "zh": "中风风险"
        },
        "DFXPOINT_TITLE:HPT_RISK_PROB": {
            "default": "Hypertension Risk",
            "zh": "高血压风险"
        },
        "DFXPOINT_TITLE:DBT_RISK_PROB": {
            "default": "Type 2 Diabetes Risk",
            "zh": "2型糖尿病风险"
        },
        "DFXPOINT_TITLE:HDLTC_RISK_PROB": {
            "default": "Hypercholesterolemia Risk",
            "zh": "高胆固醇血症风险"
        },
        "DFXPOINT_TITLE:TG_RISK_PROB": {
            "default": "Hypertriglyceridemia Risk",
            "zh": "高甘油三酯血症风险"
        },
        "DFXPOINT_TITLE:FLD_RISK_PROB": {
            "default": "Fatty Liver Disease Risk",
            "zh": "脂肪肝风险"
        },
        "DFXPOINT_TITLE:OVERALL_METABOLIC_RISK_PROB": {
            "default": "Overall Metabolic Health Risk",
            "zh": "整体代谢健康风险"
        },
        "DFXPOINT_TITLE:HBA1C_RISK_PROB": {
            "default": "Hemoglobin A1C Risk",
            "zh": "糖化血红蛋白水平高于5.7%的风险"
        },
        "DFXPOINT_TITLE:MFBG_RISK_PROB": {
            "default": "Fasting Blood Glucose Risk",
            "zh": "空腹血糖水平高于5.5mmol/L的风险"
        },
        "DFXPOINT_TITLE:HEALTH_SCORE": {
            "default": "General Wellness Score",
            "ko": "종합 건강 지수",
            "zh": "综合健康评分"
        },
        "DFXPOINT_TITLE:VITAL_SCORE": {
            "default": "Vitals",
            "ko": "활력",
            "zh": "生命体征"
        },
        "DFXPOINT_TITLE:PHYSIO_SCORE": {
            "default": "Physiological",
            "ko": "신진대사(생리학적)",
            "zh": "生理指标"
        },
        "DFXPOINT_TITLE:MENTAL_SCORE": {
            "default": "Mental",
            "ko": "스트레스지수",
            "zh": "心理指标"
        },
        "DFXPOINT_TITLE:PHYSICAL_SCORE": {
            "default": "Physical",
            "ko": "신체점수",
            "zh": "身体指标"
        },
        "DFXPOINT_TITLE:RISKS_SCORE": {
            "default": "Risks",
            "ko": "위험요소",
            "zh": "疾病风险"
        }
    };

    // Public API
    return {
        sections,
        translations,
        definitions
    };
})()
