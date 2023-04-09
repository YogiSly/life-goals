import { reactive, computed } from 'vue';


const alert = reactive([]);

export default function useAlerts() {
  const isShowAlert = computed(() => {
    return !!alert.find((el) => el.isShow === true);
  });

  const useAlert = (type) => {
    if (!alert.includes({ type, isShow: false })) {
      alert.push({ type, isShow: false });
    }

    const index = computed(() => {
      return alert.findIndex((el) => el.type === type);
    });

    const isShow = computed(() => {
      return alert[index.value].isShow;
    });

    const close = () => {
      alert[index.value].isShow = false;
    };

    const open = () => {
      alert[index.value].isShow = true;
      setTimeout(() => {
        alert[index.value].isShow = false;
      }, 5000);
    };

    return {
      open,
      close,
      isShow,
    };
  };

  return { useAlert, isShowAlert };
}
