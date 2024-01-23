const decisionTree = {
  "Göz Hastalıkları": {
    "Göz kapağında çıkan kırmızı yumru var mı?": {
      "Evet": "Arpacık",
      "Hayır": {
        "Gözlerde sulanma var mı?": {
          "Evet": {
            "Göz çevresinde ağrı ve şişlikler var mı ?": {
              "Evet": "Göz sulanması",
              "Hayır": "Doktora başvurmalısınız"
            }
          },
          "Hayır": {
            "Gözlerde kayma var mı ?": {
              "Evet": {
                "Göz kırpma sıklığı var mı ?": {
                  "Evet": "Göz tembelliği",
                  "Hayır": "Doktora başvurmalısınız"
                }
              },
              "Hayır": "Doktora başvurmalısınız"
            }
          }
        }
      }
    }
  },
  "Boşaltım Sistemi Hastalıkları": {
    "Ateş var mı?": {
      "Evet": {
        "Sık idrara çıkma ihtiyacı var mı?": {
          "Evet": {
            "Sulu kaka var mı?": {
              "Evet": "İshal",
              "Hayır": "Doktora başvurmalısınız"
            }
          },
          "Hayır": {
            "İdrar yaparken ağrı yada yanma var mı?": {
              "Evet": "İdrar Yolu Enfeksiyonu",
              "Hayır": "Prostat"
            }
          }
        }
      },
      "Hayır": "Kabızlık"
    },
    "Hayır": {
      "İdrara çıkamama durumu var mı ?": {
        "Evet": "Kabızlık",
        "Hayır": "Doktora başvurmalısınız"
      }
    }
  },
  "Kulak Burun Boğaz Hastalıkları": {
    "Öksürük var mı ?": {
      "Evet": {
        "Yüksek ateş var mı ?": {
          "Evet": {
            "İştahsızlık var mı ?": {
              "Evet": {
                "Burun akıntısı": {
                  "Evet": {
                    "Göğüste hırıltı var mı ?": {
                      "Evet": {
                        "Nefes darlığı var mı ?": {
                          "Evet": {
                            "Dudaklar ve tırnakların morarması var mı ?": {
                              "Evet": "RSV",
                              "Hayır": "Doktora başvurunuz"
                            }
                          },
                          "Hayır": {
                            "Ağız çevresi ve parmak uçlarında morarma var mı?": {
                              "Evet": "Bronşiyolit",
                              "Hayır": "Doktora başvurunuz"
                            }
                          }
                        }
                      },
                      "Hayır": "Doktora başvurunuz"
                    }
                  },
                  "Hayır": "Doktora başvurunuz"
                }
              },
              "Hayır": {
                "Kas ağrıları, geçmeyen ateş var mı ?": {
                  "Evet": "Influenza",
                  "Hayır": "Doktora başvurunuz"
                }
              }
            }
          },
          "Hayır": "Doktora başvurunuz"
        }
      },
      "Hayır": {
        "Deride kaşıntı var mı ?": {
          "Evet": {
            "Kabartılı kızarıklık var mı ?": {
              "Evet": {
                "Eklemlerde ağrı var mı ?": {
                  "Evet": "Ürtiker",
                  "Hayır": "Doktora başvurunuz"
                }
              },
              "Hayır": {
                "İçinde sıvı ve irin olan yara var mı ?": {
                  "Evet": "Impetigo",
                  "Hayır": "Doktora başvurunuz"
                }
              }
            }
          },
          "Hayır": {
            "Kaşıntı, akıntı, ve hapşırık var mı ?": {
              "Evet": "Alerji",
              "Hayır": "Doktora başvurunuz"
            }
          }
        }
      }
    },
    "Hayır": {
      "Nefes darlığı var mı ?": {
        "Evet": {
          "Göğüste hırıltı var mı ?": {
            "Evet": {
              "Şiddetli solunum güçlüğü var mı ?": {
                "Evet": "Astım",
                "Hayır": "Doktora başvurunuz"
              }
            },
            "Hayır": {
              "Salya akıtma, yutmada zorluk var  mı ?": {
                "Evet": "Yalancı kuş palazı",
                "Hayır": "Doktora başvurunuz"
              }
            }
          }
        },
        "Hayır": {
          "Burun akıntısı var mı?": {
            "Evet": {
              "Boğmaca": "Boğmaca",
              "Hayır": "Doktora başvurunuz"
            }
          }
        }
      }
    }
  },
  "Döküntüler ve Alerjiler": {
    "Yüksek ateş var mı ?": {
      "Evet": {
        "Deride döküntü var mı ?": {
          "Evet": {
            "Kabartılı kızarıklık var mı ?": {
              "Evet": {
                "Bağışıklık sisteminde zayıflık var mı ?": {
                  "Evet": "Beşinci hastalık",
                  "Hayır": "Doktora başvurunuz"
                }
              },
              "Hayır": {
                "Ağız yaraları sıvı alımına engel oluyor mu?": {
                  "Evet": "El ayak hastalığı",
                  "Hayır": "Doktora başvurunuz"
                }
              }
            }
          },
          "Hayır": {
            "Kaşıntı, akıntı, ve hapşırık var mı ?": {
              "Evet": {
                "Kabartılı kızarıklık var mı ?": {
                  "Evet": "Ürtiker",
                  "Hayır": "Doktora başvurunuz"
                }
              },
              "Hayır": {
                "İçinde sıvı ve irin olan yara var mı ?": {
                  "Evet": "Impetigo",
                  "Hayır": "Doktora başvurunuz"
                }
              }
            }
          }
        }
      },
      "Hayır": {
        "Geçmeyen ateş ve halsizlik var mı ?": {
          "Evet": "Enfeksiyon soğuk algınlığı",
          "Hayır": "Doktora başvurunuz"
        }
      }
    },
    "Hayır": {
      "Kulak ağrısı var mı ?": {
        "Evet": "Kulak iltihabı",
        "Hayır": {
          "Ciltte ve gözlerde sararma var mı ?": {
            "Evet": "Sarılık",
            "Hayır": {
              "Dilde beyaz lekeler var mı ?": {
                "Evet": "Pamukçuk",
                "Hayır": "Doktora başvurunuz"
              }
            }
          }
        }
      }
    }
  }
};
