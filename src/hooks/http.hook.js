import { useState, useCallback } from "react";

export const useHttp = () => {
  const [process, setProcess] = useState("waiting");

  //_ запрос на сервер
  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" }
    ) => {
      //_ состояние загрузки
      setProcess("loading");

      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();

        return data;
      } catch (e) {
        //_ если ошибка

        setProcess("error");
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setProcess("loading");
  }); //_ для очистки ошибки и возобновления работы

  return { request, clearError, process, setProcess };
};
