const decisionTree = {
    "Göz Hastalıkları": {
      "Göz kapağında çıkan kırmızı yumru var mı?": {
        "Evet": "Arpacık",
        "Hayır": {
          "Gözlerde sulanma var mı?": {
            "Evet": {
              "Göz çevresinde ağrı ve şişlikler var mı?": {
                "Evet": "Göz sulanması",
                "Hayır": "Göz Kayması"
              }
            },
            "Hayır": "Göz Tembelliği"
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
                "Hayır": "Bakteriyel Enfeksiyon"
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
      }
    }
  };