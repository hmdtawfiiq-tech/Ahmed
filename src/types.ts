export type OrderStatus = 'Cooking' | 'Ready' | 'Delivered';

export interface Order {
  id: string;
  tableNumber: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  timestamp: Date;
  urgent?: boolean;
}

export interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

export interface ReportData {
  label: string;
  sales: number;
  profit: number;
}

export interface InventoryItem {
  id: string;
  name: string;
  stock: number;
  unit: string;
  minStock: number;
}

export interface Expense {
  id: string;
  category: 'Electricity' | 'Salaries' | 'Rent' | 'Other';
  amount: number;
  date: Date;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface Staff {
  id: string;
  name: string;
  role: 'Chef' | 'Waiter' | 'Manager';
  status: 'Active' | 'Offline';
  avatar: string;
}
