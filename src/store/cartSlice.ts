import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../ultil/DataModels/interfaces/IProduct';
import ICartState, { ICartItem, IUpdatePayload } from './storeModels/interfaces/ICartState';
import CartItem from './storeModels/implementations/CartItem';

const p: ICartItem[] = [
    {
        _id: {
            $oid: '62ccd4665eefc71539bb6b4c'
        },
        category: 'iphone',
        img1: 'https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_13_4.jpeg?alt=media&token=dc72dde3-cfa4-4710-9493-ac2aa0ecf249',
        img2: 'https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_13_3.jpeg?alt=media&token=b3417ab8-33b9-4b52-a980-8f9afe4e0896',
        img3: 'https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_13_2.jpeg?alt=media&token=74aac3de-0c55-490e-9601-30829de7879f',
        img4: 'https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_13_4.jpeg?alt=media&token=dc72dde3-cfa4-4710-9493-ac2aa0ecf249',
        long_desc: 'Tính năng nổi bật \n\n• Màn hình Super Retina XDR 6.7 inch với ProMotion cho cảm giác nhanh nhạy hơn (3)\n\n• Chế độ Điện Ảnh làm tăng thêm độ sâu trường ảnh nông và tự động thay đổi tiêu cự trong video\n\n• Hệ thống camera chuyên nghiệp Telephoto, Wide và Ultra Wide 12MP; LiDAR Scanner; phạm vi thu phóng quang học 6x; chụp ảnh macro; Phong Cách Nhiếp Ảnh, video ProRes (4), HDR thông minh thế hệ 4, chế độ Ban Đêm, Apple ProRAW, khả năng quay video HDR Dolby Vision 4K\n\n• Camera trước TrueDepth 12MP với chế độ Ban Đêm và khả năng quay video HDR Dolby Vision 4K\n\n• Chip A15 Bionic cho hiệu năng thần tốc\n\n• Thời gian xem video lên đến 28 giờ, thời lượng pin dài nhất từng có trên iPhone (2)\n\n• Thiết kế bền bỉ với Ceramic Shield\n\n• Khả năng chống nước đạt chuẩn IP68 đứng đầu thị trường (5)\n\n• Mạng 5G cho tốc độ tải xuống siêu nhanh, xem video và nghe nhạc trực tuyến chất lượng cao (1)\n\n• iOS 15 tích hợp nhiều tính năng mới cho phép bạn làm được nhiều việc hơn bao giờ hết với iPhone (6)..',
        name: 'Apple iPhone 13 Pro Max - Alpine Green',
        price: '29390000',
        short_desc: 'iPhone 13 Pro Max. Một nâng cấp hệ thống camera chuyên nghiệp hoành tráng chưa từng có. Màn hình Super Retina XDR với ProMotion cho cảm giác nhanh nhạy hơn. Chip A15 Bionic thần tốc. Mạng 5G siêu nhanh.1 Thiết kế bền bỉ và thời lượng pin dài nhất từng có trên iPhone (2).\n\n',
        quatity: 12
    },
    {
        _id: {
            $oid: '62ccd466s5eefc71539bb6b4c'
        },
        category: 'iphone',
        img1: 'https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_13_4.jpeg?alt=media&token=dc72dde3-cfa4-4710-9493-ac2aa0ecf249',
        img2: 'https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_13_3.jpeg?alt=media&token=b3417ab8-33b9-4b52-a980-8f9afe4e0896',
        img3: 'https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_13_2.jpeg?alt=media&token=74aac3de-0c55-490e-9601-30829de7879f',
        img4: 'https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_13_4.jpeg?alt=media&token=dc72dde3-cfa4-4710-9493-ac2aa0ecf249',
        long_desc: 'Tính năng nổi bật \n\n• Màn hình Super Retina XDR 6.7 inch với ProMotion cho cảm giác nhanh nhạy hơn (3)\n\n• Chế độ Điện Ảnh làm tăng thêm độ sâu trường ảnh nông và tự động thay đổi tiêu cự trong video\n\n• Hệ thống camera chuyên nghiệp Telephoto, Wide và Ultra Wide 12MP; LiDAR Scanner; phạm vi thu phóng quang học 6x; chụp ảnh macro; Phong Cách Nhiếp Ảnh, video ProRes (4), HDR thông minh thế hệ 4, chế độ Ban Đêm, Apple ProRAW, khả năng quay video HDR Dolby Vision 4K\n\n• Camera trước TrueDepth 12MP với chế độ Ban Đêm và khả năng quay video HDR Dolby Vision 4K\n\n• Chip A15 Bionic cho hiệu năng thần tốc\n\n• Thời gian xem video lên đến 28 giờ, thời lượng pin dài nhất từng có trên iPhone (2)\n\n• Thiết kế bền bỉ với Ceramic Shield\n\n• Khả năng chống nước đạt chuẩn IP68 đứng đầu thị trường (5)\n\n• Mạng 5G cho tốc độ tải xuống siêu nhanh, xem video và nghe nhạc trực tuyến chất lượng cao (1)\n\n• iOS 15 tích hợp nhiều tính năng mới cho phép bạn làm được nhiều việc hơn bao giờ hết với iPhone (6)..',
        name: 'Apple iPhone 13 Pro Max - Alpine Green',
        price: '29390000',
        short_desc: 'iPhone 13 Pro Max. Một nâng cấp hệ thống camera chuyên nghiệp hoành tráng chưa từng có. Màn hình Super Retina XDR với ProMotion cho cảm giác nhanh nhạy hơn. Chip A15 Bionic thần tốc. Mạng 5G siêu nhanh.1 Thiết kế bền bỉ và thời lượng pin dài nhất từng có trên iPhone (2).\n\n',
        quatity: 12
    }
]

const initialState: ICartState = {
    items: p
}

function add(state: ICartState, action: PayloadAction<IProduct>) {
    // updItemsList : updated Items List
    const updItemsList = [...state.items]
    // exIndex : existed Index
    const exIndex = state.items.findIndex(i => i._id?.$oid === action.payload._id?.$oid)
    const exItem = updItemsList[exIndex]
    if (exItem) {
        const updItem: ICartItem = {
            ...updItemsList[exIndex],
            quatity: Number(exItem.quatity!) + 1
        }
        updItemsList[exIndex] = updItem
    }
    else {
        updItemsList.push(new CartItem(action.payload))
    }

    state.items = updItemsList
}

/** @param action -  payload is an object {id:string, amount:number} */
function updateQuantity(state: ICartState, action: PayloadAction<IUpdatePayload>) {
    const updItemsList = [...state.items]
    const updIndex = state.items.findIndex(i => i._id?.$oid === action.payload.id)
    const updItem = { ...updItemsList[updIndex] }
    updItem.quatity = Number(updItem.quatity) + Number(action.payload.amount)

    if (updItem.quatity <= 0)
        updItemsList.splice(updIndex, 1)
    else
        updItemsList[updIndex] = updItem
    state.items = updItemsList
}

/** @param action - payload is productId */
function remove(state: ICartState, action: PayloadAction<string>) {
    state.items = state.items.filter(i => i._id?.$oid !== action.payload)
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: add,
        updateItemQuantity: updateQuantity,
        removeItem: remove
    }
})

export const { addItem, updateItemQuantity, removeItem } = cartSlice.actions
export default cartSlice.reducer