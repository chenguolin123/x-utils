const currencyUtil = {
    /**
     * 转为缩写模式
     * K：千
     * M: 百万
     * B: 亿
     * @param value {Number}
     */
    abbreviate(value) {
        if (value >= 100000000) {
            return parseInt(value / 100000000) + 'B'
        } else if (value >= 1000000) {
            return parseInt(value / 1000000) + 'M'
        } else if (value >= 1000) {
            return parseInt(value / 1000) + 'K'
        } else {
            return value
        }
    },
}
export default currencyUtil
