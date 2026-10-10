---
name: Community Expression
about: Share what this time of year means where you live
title: "[Expression] "
labels: ["community-expression", "awaiting-review"]
assignees: []
body:
  - type: dropdown
    id: solar-term
    attributes:
      label: Which solar term?
      options:
        - 立春 Lichun (Beginning of Spring)
        - 雨水 Yushui (Rain Water)
        - 惊蛰 Jingzhe (Awakening of Insects)
        - 春分 Chunfen (Spring Equinox)
        - 清明 Qingming (Pure Brightness)
        - 谷雨 Guyu (Grain Rain)
        - 立夏 Lixia (Beginning of Summer)
        - 小满 Xiaoman (Grain Full)
        - 芒种 Mangzhong (Grain in Ear)
        - 夏至 Xiazhi (Summer Solstice)
        - 小暑 Xiaoshu (Minor Heat)
        - 大暑 Dashu (Major Heat)
        - 立秋 Liqiu (Beginning of Autumn)
        - 处暑 Chushu (End of Heat)
        - 白露 Bailu (White Dew)
        - 秋分 Qiufen (Autumn Equinox)
        - 寒露 Hanlu (Cold Dew)
        - 霜降 Shuangjiang (Frost's Descent)
        - 立冬 Lidong (Beginning of Winter)
        - 小雪 Xiaoxue (Minor Snow)
        - 大雪 Daxue (Major Snow)
        - 冬至 Dongzhi (Winter Solstice)
        - 小寒 Xiaohan (Minor Cold)
        - 大寒 Dahan (Major Cold)
    validations:
      required: true

  - type: input
    id: location
    attributes:
      label: Where do you live?
      placeholder: e.g., "Kyoto, Japan" or "Oregon, USA" or "Guangzhou, China"
    validations:
      required: true

  - type: textarea
    id: expression
    attributes:
      label: What does this time mean where you live?
      description: |
        Share your experience of this season — what you see, feel, eat, celebrate, or notice in nature.
        This can be about weather, plants, animals, food, festivals, daily life, or memories.
        Write in any language you're comfortable with.
      placeholder: |
        Example: "In my hometown, this is when the cherry blossoms start to fall. My grandmother always said it means it's time to plant the rice seedlings..."
    validations:
      required: true

  - type: textarea
    id: media
    attributes:
      label: Optional: describe a photo, sound, or image you'd like to share
      description: Don't attach files yet — describe what you'd like to contribute. We'll guide you on how to submit media after review.

  - type: checkboxes
    id: consent
    attributes:
      label: Publishing consent
      options:
        - label: I agree to share this under CC BY-SA 4.0, with attribution as I specify
          required: true

  - type: input
    id: credit-name
    attributes:
      label: How would you like to be credited?
      placeholder: Your name or nickname (or "anonymous")
