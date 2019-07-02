import request from '@/utils/request';
import querystring from 'querystring';
import { PAGE_SIZE } from '@/pages/home/role/constants';

// 获取全部的角色
export const roleList = (pageNum, where) => {
  let whereStr = querystring.stringify(where);
  return request(`/api/v1/role?pageNum=${pageNum}&pageSize=${PAGE_SIZE}&${whereStr}`);
};

// 创建角色
export const createRole = data => {
  return request('/api/v1/role', {
    method: 'post',
    body: JSON.stringify(data),
  });
};

// 删除用户
export const delRole = id => {
  return request(`/api/v1/role/${id}`, {
    method: 'delete',
  });
};

// 批量删除用户
export const delAll = ids => {
  return request(`/api/v1/role/${ids[0]}`, {
    method: 'delete',
    body: JSON.stringify(ids),
  });
};

// 更新数据
export const updateRole = data => {
  return request(`/api/v1/role/${data.id}`, {
    method: 'put',
    body: JSON.stringify(data),
  });
};
