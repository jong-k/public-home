---
category: portfolio
title: 커스텀 스크립트로 다국어 JSON 파일 검사 자동화
date: 2025-08-24
description: 커스텀 스크립트를 만들어 번거로운 작업을 자동화하여 반복적으로 발생하는 에러를 해결한 내용을 정리했습니다
---

> 커스텀 스크립트를 만들어 번거로운 작업을 자동화하여 반복적으로 발생하는 에러를 해결한 내용을 정리했습니다

다국어 지원(i18n) 기능을 구현하던 중, 한국어와 영어 텍스트 JSON 파일의 누락 및 불일치로 인해 UI가 깨지는 이슈가 반복적으로 발생했습니다. 에러가 발생할 때마다 두 JSON 파일을 직접 대조하며 수정하는 과정은 매우 번거롭고 비효율적이었습니다.

- 한국어 JSON 예시

```json
{
  "title": "환영합니다 {{name}}, react-i18next를 사용한 완전한 타입 안전 리액트에 오신 것을 환영합니다",
  "description": {
    "part1": "이것은 간단한 예제입니다.",
    "part2": "😉"
  },
  "userMessagesUnread_one": "읽지 않은 메시지가 {{count}}개 있습니다.",
  "userMessagesUnread_other": "읽지 않은 메시지가 {{count}}개 있습니다."
}
```

- 영어 JSON 예시

```json
{
  "title": "Welcome {{name}}, to react using react-i18next fully type-safe",
  "description": {
    "part1": "This is a simple example.",
    "part2": "😉"
  },
  "userMessagesUnread_one": "You have {{count}} unread message.",
  "userMessagesUnread_other": "You have {{count}} unread messages."
}
```

그래서 JSON 파일을 읽고 비교하여 누락된 키가 있는지 검사하는 스크립트를 작성했습니다.

- ./scripts/check-i18n.js

```js
import { readFile } from "fs/promises";

// json 파일을 읽어 JS 객체로 파싱
const loadJson = async path => {
  try {
    const jsonContent = await readFile(path, "utf-8");
    return JSON.parse(jsonContent);
  } catch (err) {
    console.log(`Error reading file at ${path}:`, err);
  }
};
// 재귀적으로 모든 객체의 키를 배열에 담아 반환
const getAllkeys = (obj, parentKey = "") => {
  let keys = [];
  for (const key in obj) {
    // 부모 프로퍼티의 키를 자식 키의 앞에 붙여 중복을 방지
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      keys = keys.concat(getAllkeys(obj[key], newKey));
    } else {
      keys.push(newKey);
    }
  }
  return keys;
};

const checkKeys = async () => {
  let hasError = false;
  const koJson = await loadJson("src/features/i18n/locales/ko.json");
  const enJson = await loadJson("src/features/i18n/locales/en.json");

  const koKeys = getAllkeys(koJson);
  const enKeys = getAllkeys(enJson);
  // 한국어와 영어의 모든 키들을 검사
  const missingInKo = enKeys.filter(key => !koKeys.includes(key));
  const missingInEn = koKeys.filter(key => !enKeys.includes(key));
  console.log("Checking for missing keys between ko.json and en.json...");
  if (missingInKo.length > 0) {
    hasError = true;
    console.log("Missing keys in ko.json:", missingInKo);
  } else {
    console.log("No missing keys in ko.json");
  }
  if (missingInEn.length > 0) {
    hasError = true;
    console.log("Missing keys in en.json:", missingInEn);
  } else {
    console.log("No missing keys in en.json");
  }
  if (hasError) process.exit(1);
};

const main = async () => {
  await checkKeys();
};

main()
  .then(() => {
    console.log("i18n check completed successfully");
  })
  .catch(err => {
    console.error("Error during i18n check:", err);
  });
```

추가로 Husky를 활용해 pre-push git hook에 이 스크립트를 등록해서 push 하기 전에 자동으로 스크립트를 실행하게 했습니다.

- ./husky/pre-push

```sh
#!/usr/bin/env sh

node ./scripts/check-i18n.js
```
