import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //_ запрос на сервер
  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" }
    ) => {
      //_ состояние загрузки
      setLoading(true);

      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();

        setLoading(false);
        return data;
      } catch (e) {
        //_ если ошибка
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []); //_ для очистки ошибки и возобновления работы

  return { loading, request, error, clearError };
};
