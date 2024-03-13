import dayjs from "dayjs";

const dateUtil = {
    /**
     * 格式化
     * @param date
     * @param format
     * @returns {String}
     */
    format(date, format = 'YYYY-MM-DD HH:mm:ss') {
        if (!date) return ''
        return dayjs(date).format(format)
    }
}

export default dateUtil
